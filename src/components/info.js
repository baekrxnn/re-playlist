import React, { Component } from 'react';
import Row from './row.js';

export default class Info extends Component {
  render() {
    // title
    let title =["Blue Flame",
    "WANNABE",
    "Nostalgic Night",
    "As You Wish",
    "Girl Front",
    "ME",
    "Come Back",
    "Knock On",

    ];
    // artist
    let artist = ["ASTRO", 
    "Golden Child",
    "Victon",
    "WJSN",
    "LOONA Odd Eye Circle",
    "CLC",
    "WayV",
    "NCT 127",

    ];
    // video
    let vid = ["https://www.youtube.com/embed/wS7anrSXKrY",
    "https://www.youtube.com/embed/Lk6hMlas2eA",
    "https://www.youtube.com/embed/UOXkpWuwfy8",
    "https://www.youtube.com/embed/Jz1Mqg_-SRk",
    "https://www.youtube.com/embed/KxW9PFxH4jU",
    "https://www.youtube.com/embed/uWmsdEGVFsM",
    "https://www.youtube.com/embed/caiJ3gmSG9s",
    "https://www.youtube.com/embed/_8eBC38y6oE",

    ];
    // full array
    let res=[];
    for (let i=0; i<vid.length; i++) {
      console.log('i '+i);
      res.push(<Row video={vid[i]} title={title[i]} artist={artist[i]} />);
    }
    
    // return 

    return (
      <div>
        {res}
      </div>
    )
  }
}