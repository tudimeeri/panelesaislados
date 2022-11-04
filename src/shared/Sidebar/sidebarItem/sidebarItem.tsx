import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Icon from "@mdi/react";
import { ItemT } from './sideMenuItems';
import './sidebarItem.scss';

type Props = RouteComponentProps<any> & {
  item: ItemT;
};

const Item = (props: Props) => {

  const goTo: any = () => {
    if (props.item.routeTo === '/products') {
      props.history.push(`${props.item.routeTo}`, {product: true});
    } else {
      props.history.push(`${props.item.routeTo}`);
    }
  };



  return (
    <div className="side-item" onClick={goTo}>
      <Icon
        path={props.item.pathIcon}
        title="User Profile"
        size={props.item.size}
        color={props.item.color}
      />
      <p>{props.item.text}</p>
      <hr></hr>
    </div>
  );
}

export default Item;
