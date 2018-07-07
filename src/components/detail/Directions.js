import React, {Component} from 'react';
import MarkdownIt from 'markdown-it';

class Directions extends Component {


    render() {
       let md = new MarkdownIt("commonmark");
        const {data} = this.props;

        return (
            <div dangerouslySetInnerHTML={{__html: md.render(data)}}>

            </div>
        );
    }
}

export default Directions;
