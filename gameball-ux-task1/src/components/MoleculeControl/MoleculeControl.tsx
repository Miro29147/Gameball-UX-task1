import React, { useState } from "react";
import {
  challengesDataType,
  challengesData,
} from "../../static-data/challengesData";
import filterIcon from "../../assets/icon_Filter-LoFi_20px.svg";
import sortIcon from "../../assets/icon_Sort-LoFi_20px.svg";
import searchIcon from "../../assets/icon_Search-LoFi_20px.svg";
import dropDown from "../../assets/icon_Dropdown-Down_LS.svg";
import "./moleculecontrol.scss";

type Props = {
  modifiedData: challengesDataType[];
  setModifiedData: React.Dispatch<React.SetStateAction<challengesDataType[]>>;
  setIsFilter: React.Dispatch<React.SetStateAction<boolean>>;
  isFilter: Boolean;
  data: challengesDataType[];
  setData: React.Dispatch<React.SetStateAction<challengesDataType[]>>;
};

const MoleculeControl: React.FC<Props> = ({
  modifiedData,
  setModifiedData,
  setIsFilter,
  isFilter,
  data,
  setData,
}: Props) => {
  //Should Handle States Better(Maybe Use More DS)
  const [filterDrop, setFilterDrop] = useState<boolean>(false);
  const [sortDrop, setSortDrop] = useState<boolean>(false);
  const [isActiveFilter, setIsActiveFilter] = useState<boolean>(false);
  const [isInActiveFilter, setIsInActiveFilter] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  //Should Modify For Automation
  const [isSort, setIsSort] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  var filteredArray: challengesDataType[] = [];

  //Should Support Filtered Data
  const searchHandler = (e: { target: { value: string } }) => {
    var searchText = e.target.value.toLowerCase();
    for (var i in challengesData) {
      if (challengesData[i].content.toLowerCase().includes(searchText)) {
        filteredArray.push(challengesData[i]);
      }
    }
    setData(filteredArray);
    if (searchText === "") {
      setData(challengesData);
    }
  };

  const filterActiveHandler = () => {
    for (var i in data) {
      if (data[i].active === true) {
        filteredArray.push(data[i]);
      }
    }
    setModifiedData(filteredArray);
  };

  const filterInActiveHandler = () => {
    for (var i in data) {
      if (data[i].active === false) {
        filteredArray.push(data[i]);
      }
    }
    setModifiedData(filteredArray);
  };

  const sortAscHandler = (input: string) => {
    if (isActiveFilter || isInActiveFilter) {
      switch (input) {
        case "date":
          // code block
          break;
        case "frubies":
          filteredArray = [...modifiedData];
          filteredArray.sort((a, b) => {
            return a.frubies - b.frubies;
          });
          setModifiedData(filteredArray);
          break;
        case "points":
          filteredArray = [...modifiedData];
          filteredArray.sort((a, b) => {
            return a.points - b.points;
          });
          setModifiedData(filteredArray);
          break;
        default:
      }
    } else {
      switch (input) {
        case "date":
          // code block
          break;
        case "frubies":
          filteredArray = [...data];
          filteredArray.sort((a, b) => {
            return a.frubies - b.frubies;
          });
          setData(filteredArray);
          break;
        case "points":
          filteredArray = [...data];
          filteredArray.sort((a, b) => {
            return a.points - b.points;
          });
          setData(filteredArray);
          break;
        default:
      }
    }
  };

  const sortDscHandler = (input: string) => {
    if (isActiveFilter || isInActiveFilter) {
      switch (input) {
        case "date":
          // code block
          break;
        case "frubies":
          filteredArray = [...modifiedData];
          filteredArray.sort((a, b) => {
            return b.frubies - a.frubies;
          });
          setModifiedData(filteredArray);
          break;
        case "points":
          filteredArray = [...modifiedData];
          filteredArray.sort((a, b) => {
            return b.points - a.points;
          });
          setModifiedData(filteredArray);
          break;
        default:
      }
    } else {
      switch (input) {
        case "date":
          // code block
          break;
        case "frubies":
          filteredArray = [...data];
          filteredArray.sort((a, b) => {
            return b.frubies - a.frubies;
          });
          setData(filteredArray);
          break;
        case "points":
          filteredArray = [...data];
          filteredArray.sort((a, b) => {
            return b.points - a.points;
          });
          setData(filteredArray);
          break;
        default:
      }
    }
  };

  return (
    <div className="moleculecontrol">
      <div className="moleculecontrol__left">
        <div
          className={
            filterDrop
              ? "moleculecontrol__left__filter selected"
              : "moleculecontrol__left__filter"
          }
          onClick={() => setFilterDrop(!filterDrop)}
        >
          <img
            src={filterIcon}
            alt=""
            className="moleculecontrol__left__filter--icon"
          />
          <span className="moleculecontrol__left__filter--title">Filter</span>
          <img
            src={dropDown}
            alt=""
            className="moleculecontrol__left__filter--drop"
          />
        </div>
        {/* Should Be Implemented as a Reusable Component */}
        <div
          className={
            filterDrop
              ? "moleculecontrol__left__filterdropdown active"
              : "moleculecontrol__left__filterdropdown"
          }
        >
          <ul className="moleculecontrol__left__filterdropdown__list">
            <li
              onClick={() => {
                if (!isInActiveFilter) {
                  filterActiveHandler();
                  setIsFilter(!isFilter);
                  setIsActiveFilter(!isActiveFilter);
                }
              }}
              className={
                isInActiveFilter
                  ? "moleculecontrol__left__filterdropdown__list--item disabled"
                  : isActiveFilter
                  ? "moleculecontrol__left__filterdropdown__list--item activated"
                  : "moleculecontrol__left__filterdropdown__list--item"
              }
            >
              Active
            </li>
            <li
              className={
                isActiveFilter
                  ? "moleculecontrol__left__filterdropdown__list--item disabled"
                  : isInActiveFilter
                  ? "moleculecontrol__left__filterdropdown__list--item activated"
                  : "moleculecontrol__left__filterdropdown__list--item"
              }
              onClick={() => {
                if (!isActiveFilter) {
                  filterInActiveHandler();
                  setIsFilter(!isFilter);
                  setIsInActiveFilter(!isInActiveFilter);
                }
              }}
            >
              Inactive
            </li>
          </ul>
        </div>
        <div
          className={
            sortDrop
              ? "moleculecontrol__left__sort selected"
              : "moleculecontrol__left__sort"
          }
          onClick={() => setSortDrop(!sortDrop)}
        >
          <img
            src={sortIcon}
            alt=""
            className="moleculecontrol__left__sort--icon"
          />
          <span className="moleculecontrol__left__sort--title">Sort</span>
          <img
            src={dropDown}
            alt=""
            className="moleculecontrol__left__sort--drop"
          />
        </div>
        <div
          className={
            sortDrop
              ? "moleculecontrol__left__sortdropdown active"
              : "moleculecontrol__left__sortdropdown"
          }
        >
          <ul className="moleculecontrol__left__sortdropdown__list">
            <li
              onClick={() => {
                sortAscHandler("frubies");
                setIsSort([!isSort[0], false, false, false]);
              }}
              className={
                isSort[0]
                  ? "moleculecontrol__left__sortdropdown__list--item activated"
                  : "moleculecontrol__left__sortdropdown__list--item"
              }
            >
              Asc: Frubies
            </li>
            <li
              onClick={() => {
                setIsSort([false, !isSort[1], false, false]);
                sortDscHandler("frubies");
              }}
              className={
                isSort[1]
                  ? "moleculecontrol__left__sortdropdown__list--item activated"
                  : "moleculecontrol__left__sortdropdown__list--item"
              }
            >
              Dsc: Frubies
            </li>
            <li
              onClick={() => {
                setIsSort([false, false, !isSort[2], false]);
                sortAscHandler("points");
              }}
              className={
                isSort[2]
                  ? "moleculecontrol__left__sortdropdown__list--item activated"
                  : "moleculecontrol__left__sortdropdown__list--item"
              }
            >
              Asc: Points
            </li>
            <li
              onClick={() => {
                setIsSort([false, false, false, !isSort[3]]);
                sortDscHandler("points");
              }}
              className={
                isSort[3]
                  ? "moleculecontrol__left__sortdropdown__list--item activated"
                  : "moleculecontrol__left__sortdropdown__list--item"
              }
            >
              Dsc: Points
            </li>
          </ul>
        </div>
      </div>
      <div 
        className={
          isActiveFilter || isInActiveFilter
            ? "moleculecontrol__search disabled"
            : isSearch
            ? "moleculecontrol__search searching"
            : "moleculecontrol__search"
        }
      >
        <img
          src={searchIcon}
          alt=""
          className="moleculecontrol__search--icon"
        />
        <input
          disabled={(isActiveFilter || isInActiveFilter) && true}
          type="search"
          placeholder="Search"
          className="moleculecontrol__search--input"
          onFocus={() => {
            setIsSearch(true);
          }}
          onBlur={() => {
            setIsSearch(false);
          }}
          onChange={searchHandler}
        />
      </div>
    </div>
  );
};

export default MoleculeControl;
