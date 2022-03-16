import React, { Component } from "react";
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class ChildButtonInGrid extends Component{
    element;

    constructor(props) {
        super(props);
        this.element = document.createElement('div');

        const { onSelectButtonClicked } = props.columnInfo.renderer.options;
        const { grid, rowKey } = props;

        render(
            <button type="button" 
                className="btn btn-sm btn-secondary" 
                onClick={() => onSelectButtonClicked(grid, rowKey)}>선택</button>,
            this.element
        );
    }

    getElement() {
        return this.element;
    }
};
export default ChildButtonInGrid;