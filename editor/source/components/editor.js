import React from 'react';

import ace from 'brace';
import 'brace/mode/markdown';
import 'brace/theme/tomorrow';

export default class Editor extends React.Component {
    componentDidMount () {
        let editor = ace.edit('editor');
        editor.setOptions({
            scrollPastEnd: true,
            showGutter: false,
            wrap: true,
            theme: 'ace/theme/tomorrow',
            mode: 'ace/mode/markdown',
            showPrintMargin: false,
            fontSize: '14px',
            fontFamily: "Menlo, Consolas, 'source-code-pro', 'DejaVu Sans Mono', Monaco, 'Ubuntu Mono', 'Courier New', Courier, 'Microsoft Yahei', 'Hiragino Sans GB', 'WenQuanYi Micro Hei', monospace",
            hScrollBarAlwaysVisible: false,
            displayIndentGuides: false
        });
        editor.renderer.setScrollMargin(200, 200);
        editor.renderer.setPadding(600);
        editor.container.style.lineHeight = 2;
    }
    render() {
        return (
            <div id="editor"></div>
        );
    }
}
