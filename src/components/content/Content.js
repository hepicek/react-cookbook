
import React, { Component } from 'react';
import List from '../list/List';
import Detail from '../detail/Detail';

class Content extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          page: 'list', // 'list' or 'detail'
          detailSlug: false,
        };
    }

    setPage = (newPage, detailSlug = false) => {
        this.setState({
            page: newPage,
            detailSlug: detailSlug,
        });
    };

  render() {
    const {page, detailSlug} = this.state;

    return (
        <div>
        {page === 'list' && (
          <List
            onClickHandler={(detailSlug) => {
              this.setPage('detail', detailSlug);
            }}
          />
        )}

        {page === 'detail' && (
          <Detail
          detailSlug={detailSlug}
            onClickHandler={() => {
              this.setPage('list');
            }}
          />
        )}
      </div>
    );
  }
}

export default Content;
