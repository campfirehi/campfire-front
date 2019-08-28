interface Scripts {
    name: string;
    src: string;
}  
export const ScriptStore: Scripts[] = [
    {name: 'whiteboard', src: 'https://awwapp.com/static/widget/js/aww3.min.js'},
    {name: 'whiteboard_toolbar', src: 'https://awwapp.com/static/widget/sample_toolbar.js'},
    {name: 'wordcloud', src: '../../../assets/js/tagcanvas.min.js'}
];