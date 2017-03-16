import React, {PropTypes} from 'react';


export default function Layout(props) {
  return (
    <div className="app-body">
      {props.children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
