
import Util from '../utils'

export const getHotSpotById = function (houseData, hotSpotId) {
    var hotSpots = houseData.HotSpots;

    for (var i in hotSpots) {
        if (hotSpots[i].ID === hotSpotId) {
            return hotSpots[i];
        }
    }
};

export const getHotSpotByName = function (houseData, hotSpotName) {
    var hotSpots = houseData.HotSpots;

    for (var i in hotSpots) {
        if (hotSpots[i].Name === hotSpotName) {
            return hotSpots[i];
        }
    }
};

export const getHotSpotsDataOfFloor = function (houseData, floorData) {
    var hotSpots = [];

    floorData.Rooms.forEach(function (roomData) {
        hotSpots.push.apply(hotSpots, getHotSpotsDataOfRoom(houseData, roomData));
    });

    return hotSpots;
};

export const getHotSpotsDataOfRoom = function (houseData, roomData) {
    var hotSpots = [];

    for (var hotSpotIndex in roomData.HotSpotIds) {
        var hotSpot = getHotSpotById(houseData, roomData.HotSpotIds[hotSpotIndex]);

        if (hotSpot) {
            hotSpots.push(hotSpot);
        }
    }

    return hotSpots;
};

export const getFloorByHotSpotId = function (houseData, hotSpotId) {
    for (var floorIndex in houseData.Floors) {
        var floor = houseData.Floors[floorIndex];

        for (var roomIndex in floor.Rooms) {
            var room = floor.Rooms[roomIndex];

            if (Util.contains(room.HotSpotIds, hotSpotId)) {
                return floor;
            }
        }
    }
};

export const getDefaultHotSpotByFloor = function (houseData, floorData) {
    for (var i in floorData.Rooms) {
        if (floorData.Rooms[i].HotSpotIds.length === 0) {
            continue;
        }

        var hotSpotId = floorData.Rooms[i].HotSpotIds[0];
        return getHotSpotById(houseData, hotSpotId);
    }
};

export const getDefaultHotSpot = function (houseData) {
    if (!houseData.HotSpots || houseData.HotSpots.length === 0) {
        return;
    }

    var hotSpot = houseData.HotSpots[0];
    if (location.hash) {
        var id = location.hash.substr(1).split("_")[0];
        for (var i in houseData.HotSpots) {
            if (houseData.HotSpots[i].ID === id) {
                hotSpot = houseData.HotSpots[i];
            }
        }
    } else if (houseData.DefaultHotSpotId && houseData.DefaultHotSpotId !== "") {
        for (var i in houseData.HotSpots) {
            if (houseData.HotSpots[i].ID === houseData.DefaultHotSpotId) {
                hotSpot = houseData.HotSpots[i];
            }
        }
    }

    return hotSpot;
};

export const getDefaultFloor = function (houseData) {
    var defaultFloor = houseData.Floors[0];

    if (houseData.DefaultHotSpotId && houseData.DefaultHotSpotId !== "") {
        var floor = getFloorByHotSpotId(houseData, houseData.DefaultHotSpotId);

        if (floor) {
            defaultFloor = floor;
        }
    }

    return defaultFloor;
};

export const getRoomByHotSpotId = function (houseData, hotSpotId) {
    for (var floorIndex in houseData.Floors) {
        var floor = houseData.Floors[floorIndex];

        for (var roomIndex in floor.Rooms) {
            var room = floor.Rooms[roomIndex];

            if (Util.contains(room.HotSpotIds, hotSpotId)) {
                return room;
            }
        }
    }
};

export const getRoomCenter = function (roomData) {
    var roomCenter = new THREE.Vector2();
    var count = 0;

    for (var i in roomData.RoomFaces) {
        var roomFace = roomData.RoomFaces[i];

        if (roomFace.Rotation.x % 180 === 0) {
            roomCenter.x += roomFace.Position.z;
            roomCenter.y += -roomFace.Position.x;
            count++;
        }
    }

    if (count !== 0) {
        roomCenter.x /= count;
        roomCenter.y /= count;
    }

    return roomCenter;
};

export const isHotSpotsHasPosition = function (houseData) {
    var hasPosition = false;

    for (var i in houseData.HotSpots) {
        var position = houseData.HotSpots[i].Position;

        if (position && (position.x !== 0 || position.y !== 0 || position.z !== 0)) {
            hasPosition = true;

            break;
        }
    }

    return hasPosition;
};

export const getFloorByEntrancePosition = function (houseData, position) {
    var minDistance = undefined;
    var nearestHotSpot = null;

    if (houseData.HotSpots.length === 0) {
        return;
    }

    for (var i in houseData.HotSpots) {
        var distance = Math.abs(houseData.HotSpots[i].Position.y - position.y);

        if (!minDistance || distance < minDistance) {
            nearestHotSpot = houseData.HotSpots[i];
            minDistance = distance;
        }
    }

    return getFloorByHotSpotId(houseData, nearestHotSpot.ID);
};

export const getNearestHotSpotByPosition = function (hotSpots, position, nameFilter) {
    var distanceRadius = 10 * 50; // 10m
    var nearestHotSpot = null;
    var positionV2 = new THREE.Vector2(position.x, position.z);

    var distanceArray = [];

    for (var i in hotSpots) {
        var hotSpot = hotSpots[i];
        var v2 = new THREE.Vector2(hotSpot.Position.x, -hotSpot.Position.z);
        var distance = positionV2.distanceTo(v2);

        if (distance < distanceRadius) {
            distanceArray.push({hotSpot: hotSpot, distance: distance});
        }
    }

    distanceArray.sort(function (a, b) {
        return a.distance - b.distance;
    });

    if (nameFilter) {
        nameFilter = nameFilter.toLowerCase();

        for (var i in distanceArray) {
            var names = distanceArray[i].hotSpot.Name.split("/");

            for (var j in names) {
                if (names[j].toLowerCase().indexOf(nameFilter) > -1) {
                    nearestHotSpot = distanceArray[i].hotSpot;
                    break;
                }
            }

            if (nearestHotSpot) {
                break;
            }
        }
    }

    if (!nearestHotSpot && distanceArray.length > 0) {
        nearestHotSpot = distanceArray[0].hotSpot;
    }

    return nearestHotSpot;
};


export const isAdditionalHotSpot = function (houseData, hotSpotId) {
    var room = getRoomByHotSpotId(houseData, hotSpotId);

    if (room && room.HotSpotIds && room.HotSpotIds.length > 0) {
        return room.HotSpotIds[0] !== hotSpotId;
    }
};

// unity坐标系转threejs
export const toVector3 = function (position) {
    return new THREE.Vector3(position.x, position.y, -position.z);
};
