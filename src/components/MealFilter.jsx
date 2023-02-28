import React from "react";
import MyInput from "./UI/MyInput";
import MySelect from "./UI/MySelect";

const MealFilter = ({filter, setFilter}) => {
    return (
        <div className="filter">
            <div className='search'>
                <MyInput
                    placeholder="Поиск"
                    value={filter.query}
                    onChange={e => setFilter({...filter, query:e.target.value})}
                />
            </div>
            <div className="sorting">
                <MySelect
                    value={filter.sort}
                    defaultValue="Сортировка по:"
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    options={[
                        {value: "name", name: 'По названию'},
                        {value: "price", name: "По цене"}]}
                />
            </div>
        </div>
    )
}


export default MealFilter;