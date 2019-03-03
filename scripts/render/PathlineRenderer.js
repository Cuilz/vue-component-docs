import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import MdContentCopy from 'react-icons/lib/md/content-copy';
import ToolbarButton from 'react-styleguidist/lib/rsg-components/ToolbarButton';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import getDependency from '../utils/getDependFiles.js';

export var styles = function styles(_ref) {
	var space = _ref.space,
		fontFamily = _ref.fontFamily,
		fontSize = _ref.fontSize,
		color = _ref.color;
	return {
		pathline: {
			fontFamily: fontFamily.monospace,
			fontSize: fontSize.small,
			color: color.light,
			wordBreak: 'break-all',
		},
		copyButton: {
			marginLeft: space[0],
		},
	};
};

export function PathlineRenderer(_ref2) {
	const classes = _ref2.classes,
		children = _ref2.children;

	if (!DEPENDENCY_TREE) {
    return React.createElement(
      'div',
      { className: classes.pathline },
      children,
      React.createElement(
        ToolbarButton,
        {
          small: true,
          className: classes.copyButton,
          onClick: function onClick() {
            return copy(children);
          },
          title: 'Copy to clipboard'
        },
        React.createElement(MdContentCopy, null)
      )
    );
	} else {
		const dependFiles = getDependency(DEPENDENCY_TREE.tree, children);

    return React.createElement(
			'div',
			null,
      React.createElement(
				'p',
				{ className: classes.pathline },
        '组件路径：'
			),
			React.createElement(
        'div',
        { className: classes.pathline },
        children,
        React.createElement(
          ToolbarButton,
          {
            small: true,
            className: classes.copyButton,
            onClick: function onClick() {
              return copy(children);
            },
            title: 'Copy to clipboard',
          },
          React.createElement(MdContentCopy, null)
        )
      ),
			React.createElement(
				'p',
				{ className: classes.pathline },
        '引用此组件的文件：'
			),
      React.createElement(
        'div',
        { className: classes.pathline },
        dependFiles.map(function (fileName, index) {
          return React.createElement(
            'p',
            {
              className: classes.pathline,
              key: index
            },
            fileName,
            React.createElement(
              ToolbarButton,
              {
                small: true,
                className: classes.copyButton,
                onClick: function onClick() {
                  return copy(fileName);
                },
                title: 'Copy to clipboard',
              },
              React.createElement(MdContentCopy, null)
            )
          )
        })
      )
		);
	}
}

PathlineRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.string,
};

export default Styled(styles)(PathlineRenderer);
