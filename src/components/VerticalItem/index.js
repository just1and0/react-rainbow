/* eslint-disable no-script-url, react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import iconNameUtilityPropType from './../../propTypes/iconNameUtilityPropType';
import Icon from './icon';
import Notification from './notification';
import { Consumer } from '../VerticalNavigation/context';

function Item(props) {
    const {
        label,
        iconName,
        name,
        href,
        onClick,
        notification,
        className,
        style,
        selectedItem,
        onSelect,
    } = props;
    const isSelected = name === selectedItem;

    const getContainerClassNames = () => classnames('slds-nav-vertical__item', {
        'slds-is-active': isSelected,
    }, className);

    const getAriaCurrent = () => {
        if (isSelected) {
            return 'page';
        }
        return undefined;
    };

    function hanldeOnClick(e) {
        onClick(e);
        onSelect(e, name);
    }

    return (
        <li className={getContainerClassNames()} style={style} role="presentation" onClick={hanldeOnClick}>
            <a href={href} className="slds-nav-vertical__action" aria-current={getAriaCurrent()}>
                <Icon iconName={iconName} />
                {label}
                <Notification notification={notification} />
            </a>
        </li>
    );
}

export default function VerticalItem(props) {
    return (
        <Consumer>
            {context => <Item {...props} {...context} />}
        </Consumer>
    );
}

VerticalItem.propTypes = {
    /** The text displayed for the navigation item. */
    label: PropTypes.string,
    /** A unique identifier for the navigation item. */
    name: PropTypes.string.isRequired,
    /** The Lightning Design System name of the icon used as a fallback when
    * the image fails to load. Names are written in the format {sprite_name}:{icon_name}
    * where {sprite_name} is the category, and {icon_name} is the specific icon to be displayed.
    * Only utility icons can be used in this component. */
    iconName: iconNameUtilityPropType,
    /** The URL of the page that the navigation item goes to. */
    href: PropTypes.string,
    /** The notification comoponent to display on the right */
    notification: PropTypes.node,
    /** Event fired when the item is clicked. */
    onClick: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

VerticalItem.defaultProps = {
    label: '',
    iconName: undefined,
    href: 'javascript:void(0);',
    onClick: () => {},
    notification: null,
    className: '',
    style: {},
};