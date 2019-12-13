import Fetcher from '../fetcher'
import {
  isAdditionalHotSpot,
  getDefaultRoomByFloor,
  getHotSpotsDataOfRoom
} from '../functions/HouseFunction'
import Thumbnail from '../models/Thumbnail'

const housePathPrefix = Fetcher.getHousePathPrefix();
const isEditorMode = Fetcher.isEditorMode;
const ViewDataMaker = {};

ViewDataMaker.getDefaultRoom = function (houseData, floorIndex) {
  floorIndex = floorIndex || 0;
  var floor = houseData.Floors[floorIndex];
  return getDefaultRoomByFloor(floor);
};

ViewDataMaker.getDefaultHotSpot = function (houseData, room) {
  room = room || this.getDefaultRoom(houseData);
  var hotSpots = getHotSpotsDataOfRoom(houseData, room);
  return hotSpots[0];
};

ViewDataMaker.getHotSpotThumbnailList = function (houseData) {
  var thumbnailList = [];

  for (var hotSpotIndex in houseData.HotSpots) {
    var hotSpot = houseData.HotSpots[hotSpotIndex];

    if (!isEditorMode && isAdditionalHotSpot(houseData, hotSpot.ID)) {
      continue;
    }

    var thumbnailPath = housePathPrefix + (hotSpot.ThumbnailPath || "ThumbnailImages/" + hotSpot.ImagePath);
    thumbnailPath = thumbnailPath.replace("\\", "/");

    var thumbnail = new Thumbnail();
    thumbnail.ID = hotSpot.ID;
    thumbnail.ImagePath = thumbnailPath;
    thumbnail.Name = hotSpot.Name;
    if (hotSpot.SpaceID) {
      thumbnail.SpaceID = hotSpot.SpaceID;
    }

    thumbnailList.push(thumbnail);
  }

  return thumbnailList;
};

export default ViewDataMaker;
