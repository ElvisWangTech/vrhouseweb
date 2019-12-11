import Fetcher from '../fetcher'
import {
  isAdditionalHotSpot
} from '../models/HouseModel'
import Thumbnail from '../models/Thumbnail'

const housePathPrefix = Fetcher.getHousePathPrefix();
const isEditorMode = Fetcher.isEditorMode;
const ViewDataMaker = {};

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
    thumbnail.onclick = this.onThumbnailClicked;

    thumbnailList.push(thumbnail);
  }

  return thumbnailList;
};

export default ViewDataMaker;
