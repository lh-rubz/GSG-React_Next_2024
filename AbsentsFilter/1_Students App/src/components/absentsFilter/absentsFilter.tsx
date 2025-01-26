import React from "react";
import "./absentsFilter.css";

interface AbsentsFilterProps {
  minAbsents: string | number;
  maxAbsents: string | number;
  handleMinAbsentsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxAbsentsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AbsentsFilter: React.FC<AbsentsFilterProps> = ({
  minAbsents,
  maxAbsents,
  handleMinAbsentsChange,
  handleMaxAbsentsChange,
}) => {
  return (
    <div className="absents-filter">
      <div className="filter-item">
        <label className="filter-label">Min Absents:</label>
        <input
          type="number"
          value={minAbsents}
          onChange={handleMinAbsentsChange}
          className="filter-input"
          placeholder="Min"
          min={0}
          max={maxAbsents}
        />
      </div>
      <div className="filter-item">
        <label className="filter-label">Max Absents:</label>
        <input
          type="number"
          value={maxAbsents}
          onChange={handleMaxAbsentsChange}
          className="filter-input"
          placeholder="Max"
          min={minAbsents}
          
        />
      </div>
    </div>
  );
};

export default AbsentsFilter;
