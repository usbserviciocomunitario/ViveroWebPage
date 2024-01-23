import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { IconCircleX } from "@tabler/icons-react";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import "./SearchFilterBar.scss";

export const SearchFilterBar = ({
  label = "Nombre",
  categories = [],
  handleDataChange,
}) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    handleDataChange(
      name,
      categories.find((category) => {
        return category.id === event.target.value;
      })?.name
    );
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    handleDataChange(
      event.target.value,
      categories.find((category) => {
        return category.id === category;
      })?.name
    );
  };

  const deleteSearchField = () => {
    setName("");
    handleDataChange(
      "",
      categories.find((category) => {
        return category.id === category;
      })?.name
    );
  };

  const inputRef = useRef();

  return (
    <div className="search-filter-bar">
      <TextField
        fullWidth
        className="search-bar"
        label={label}
        variant="outlined"
        size="small"
        color="secondary"
        value={name}
        inputRef={inputRef}
        onChange={handleNameChange}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <IconCircleX
                onClick={deleteSearchField}
                size={20}
                color="#49454F"
              />
            </InputAdornment>
          ),
        }}
      />

      {categories.length ? (
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            "@media screen and (max-width: 480px)": {
              width: "100%",
            },
          }}
          size="small"
        >
          <InputLabel color="secondary" id="demo-select-small-label">
            Categoría
          </InputLabel>
          <Select
            value={category}
            label="Categoría"
            color="secondary"
            onChange={handleCategoryChange}
            className="categories"
            MenuProps={{
              disableScrollLock: true,
            }}
          >
            <MenuItem value="0">Ninguna</MenuItem>
            {categories.map(({ name, id }) => (
              <MenuItem value={id} key={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        ""
      )}
    </div>
  );
};

SearchFilterBar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  handleDataChange: PropTypes.func.isRequired,
};
