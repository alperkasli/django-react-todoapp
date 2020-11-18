import React, { useEffect, useState, useCallback } from "react";
import CreatableSelect from "react-select/creatable";
import { Label } from "reactstrap";
import { todoApis } from "../api/Todos";
import { connect } from "react-redux";
import { setCategoriesAction } from "../store/Task/actions";

function TaskCategories({ handleCategorySelect, hideLabel, selectedCategory, ...props }) {
    const [isLoading, setIsloading] = useState(false)
    const [value, setValue] = useState(selectedCategory)

    const customizeOptions = (categories) => {
        const customizedOptions = categories.map(opt => ({
            label: opt.name,
            value: opt.id
        }))
        return customizedOptions
    }
    
    const getAllCategories = () => {
        const { setCategoriesDispatch } = props
        setIsloading(true)
        todoApis.getTaskCategories()
        .then(res => {
            setIsloading(false)
            setCategoriesDispatch(customizeOptions(res))
        }).catch(err => console.log(err))
    }

	const handleChange = (newValue, actionMeta) => {
        setValue(newValue)
        handleCategorySelect((previousValues) => ({ 
            ...previousValues,
            category_id: newValue && newValue.value
         }))
    };
    
	const handleCreate = (inputValue) => {
        setIsloading(true)
        todoApis.createTaskCategory({ name: inputValue })
        .then(res => {
            getAllCategories()
            setValue({ label: res.category.name, value: res.category.id})
            handleCategorySelect((previousValues) => ({ 
                ...previousValues,
                category_id: res.category.id
             }))
            setIsloading(false)
        }).catch(err => console.log(err))
    };
    
    useEffect(() => {
        const { categories } = props
        if(categories.length === 0){
            getAllCategories()
        }
    }, [])

	return (
		<>
            {!hideLabel && <Label htmlFor="categorySelect">Select or Create Category</Label>}
			<CreatableSelect
                id="categorySelect"
				isClearable
				isDisabled={isLoading}
				isLoading={isLoading}
				onChange={handleChange}
				onCreateOption={handleCreate}
				options={props.categories}
                value={value}
                placeholder="start typing.."
			/>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		categories: state.task.categories,
	};
};

const mapDispatchToProps = (dispatch) => ({
    setCategoriesDispatch: (categories) => dispatch(setCategoriesAction(categories))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskCategories);
