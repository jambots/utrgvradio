var pages=[
{"name":"footnav", "vAlign":"bottom", "hideLeft":0, "hideTop":0,  "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":1, "height":64,
   "boxes":[],
   "buttons":[
    {"name":"events", "top":-6, "left":0, "height":6, "width":16},
    {"name":"playlist", "top":-6, "left":16, "height":6, "width":16},
    {"name":"donate", "top":-6, "left":32, "height":6, "width":16}
  ],
  "contents":[
  ]
},
{"name":"home", "vAlign":"middle", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":1, "height":58,
  "boxes":[],
  "buttons":[
    {"name":"menu", "top":0, "left":0, "height":8, "width":8},
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"radiok", "top":6, "left":8, "height":20, "width":32},
    {"name":"playpause", "top":38, "left":12, "height":12, "width":24}
  ],
  "contents":[
    {"name":"nowPlayingDiv", "top":29.5, "left":1, "width":46, "height":8, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":""},
    {"name":"bufferDiv", "top":38, "left":18, "height":12, "width":12, "lineHeight":2.5, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":'<canvas id="bufferingCanvas"></canvas>'},
    {"name":"djDiv", "top":51, "left":1, "width":46, "height":8, "lineHeight":2.5, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":""}
  ]
},
{"name":"events", "vAlign":"top", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "boxes":[],
  "buttons":[
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"menu", "top":0, "left":0, "height":8, "width":8},
  ],
  "contents":[
    {"name":"events", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="calendarHolder"><div id="calendarScroller"></div></div>'}
  ]
},
{"name":"playlist", "vAlign":"top", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "boxes":[],
  "buttons":[
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"menu", "top":0, "left":0, "height":8, "width":8},

  ],
  "contents":[
    {"name":"playlist", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="playlistHolder"><div id="playlistScroller"></div></div>'}
  ]
},

{"name":"menu", "vAlign":"middle", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":58,
  "boxes":[],
  "buttons":[
    {"name":"menu", "top":0, "left":0, "height":8, "width":8},
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"ondemand", "top":12, "left":9, "height":6, "width":30},
    {"name":"alarm", "top":19, "left":9, "height":6, "width":30},
    {"name":"quality", "top":26, "left":9, "height":6, "width":30},
    {"name":"faqs", "top":33, "left":9, "height":6, "width":30},
    {"name":"contact", "top":40, "left":9, "height":6, "width":30},
  ],
  "contents":[
  ]
},
{"name":"ondemand", "vAlign":"middle", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "boxes":[
    {"name":"instBox", "top":8.5, "left":3, "width":18, "height":18, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":" "},
    {"name":"rcpBox", "top":8.5, "left":27, "width":18, "height":18, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":" "},
    {"name":"kscBox", "top":32.5, "left":3, "width":18, "height":18, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":" "},
    {"name":"wrsBox", "top":32.5, "left":27, "width":18, "height":18, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":" "},
  ],
  "buttons":[
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"menu", "top":0, "left":0, "height":8, "width":8},
    {"name":"inst", "top":9, "left":3.5, "height":17, "width":17},
    {"name":"rcp", "top":9, "left":27.5, "height":17, "width":17},
    {"name":"ksc", "top":33, "left":3.5, "height":17, "width":17},
    {"name":"wrs", "top":33, "left":27.5, "height":17, "width":17},
  ],
  "contents":[
    {"name":"instDesc", "top":27, "left":.5, "width":23, "height":2, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":"<a href=\"javascript:handleButton('ondemand','inst');\">In-Studios</a>"},
    {"name":"rcpDesc", "top":27, "left":24.5, "width":23, "height":2, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":"<a href=\"javascript:handleButton('ondemand','rcp');\">REAL COLLEGE PODCAST</a>"},
    {"name":"kscDesc", "top":51, "left":.5, "width":23, "height":2, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":"<a href=\"javascript:handleButton('ondemand','ksc');\">K SINGLES CLUB</a>"},
    {"name":"wrsDesc", "top":51, "left":24.5, "width":23, "height":2, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":"<a href=\"javascript:handleButton('ondemand','wrs');\">WEEKLY RELEASE SPOTLIGHT</a>"},
  ]
},
{"name":"inst", "vAlign":"top", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "boxes":[],
  "buttons":[
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"menu", "top":0, "left":0, "height":8, "width":8},
  ],
  "contents":[
    {"name":"downloads", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="instHolder"><div id="instScroller"></div></div>'}
  ]
},
{"name":"rcp", "vAlign":"top", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "boxes":[],
  "buttons":[
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"menu", "top":0, "left":0, "height":8, "width":8},
  ],
  "contents":[
    {"name":"downloads", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="rcpHolder"><div id="rcpScroller"></div></div>'}
  ]
},
{"name":"ksc", "vAlign":"top", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "boxes":[],
  "buttons":[
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"menu", "top":0, "left":0, "height":8, "width":8},
  ],
  "contents":[
    {"name":"downloads", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="kscHolder"><div id="kscScroller"></div></div>'}
  ]
},
{"name":"wrs", "vAlign":"top", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "boxes":[],
  "buttons":[
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"menu", "top":0, "left":0, "height":8, "width":8},
  ],
  "contents":[
    {"name":"downloads", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="wrsHolder"><div id="wrsScroller"></div></div>'}
  ]
},

{"name":"alarm", "vAlign":"middle", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":58,
  "boxes":[],
  "buttons":[
    {"name":"menu", "top":0, "left":0, "height":8, "width":8},
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"timeset", "top":21, "left":9, "height":12, "width":30},
    {"name":"set", "top":35, "left":9, "height":6, "width":30},
  ],
  "contents":[
    {"name":"alarmTimeHour", "top":22, "left":15, "width":6, "height":10, "lineHeight":4, "fontSize":4, "fontFamily":"akzibold", "color":"black", "textAlign":"right", "defaultText":"hh"},
    {"name":"alarmTimeMin", "top":22, "left":21, "width":6, "height":10, "lineHeight":4, "fontSize":4, "fontFamily":"akzibold", "color":"black", "textAlign":"left", "defaultText":"mm"},
    {"name":"alarmTimeAmPm", "top":22, "left":27, "width":8, "height":10, "lineHeight":4, "fontSize":4, "fontFamily":"akzibold", "color":"black", "textAlign":"center", "defaultText":"ampm"},
  ]
},
{"name":"armed", "vAlign":"middle", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":64,
  "boxes":[],
  "buttons":[
    {"name":"cancelalarm", "top":17, "left":9, "height":6, "width":30},
  ],
  "contents":[
    {"name":"nowtime", "top":30, "left":8, "width":32, "height":14, "lineHeight":8, "fontSize":8, "fontFamily":"akzilight", "color":"#fff", "textAlign":"center", "defaultText":"00:00:00"},
    {"name":"nowAmPm", "top":34, "left":39, "width":8, "height":7, "lineHeight":4, "fontSize":2.9, "fontFamily":"akzilight", "color":"#fff", "textAlign":"center", "defaultText":"AM"},
    {"name":"alarmtext", "top":47, "left":1, "width":46, "height":12, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzilight", "color":"white", "textAlign":"center", "defaultText":"alarmtext"}
  ]
},
{"name":"wakeup", "vAlign":"middle", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":64,
  "boxes":[],
  "buttons":[
    {"name":"alarmoff", "top":17, "left":9, "height":6, "width":30},
    {"name":"snooze", "top":47, "left":9, "height":6, "width":30},
  ],
  "contents":[
    {"name":"nowtime", "top":30, "left":8, "width":32, "height":14, "lineHeight":8, "fontSize":8, "fontFamily":"akzilight", "color":"#fff", "textAlign":"center", "defaultText":"00:00:00"},
    {"name":"nowAmPm", "top":34, "left":39, "width":8, "height":7, "lineHeight":4, "fontSize":2.9, "fontFamily":"akzilight", "color":"#fff", "textAlign":"center", "defaultText":"AM"}
  ]
},
{"name":"quality", "vAlign":"middle", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":58,
  "boxes":[],
  "buttons":[
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"menu", "top":0, "left":0, "height":8, "width":8},
    {"name":"medium", "top":14, "left":9, "height":6, "width":30},
    {"name":"higher", "top":21, "left":9, "height":6, "width":30}
  ],
  "contents":[
  ]
},
{"name":"faqs", "vAlign":"top", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":58,
  "boxes":[],
  "buttons":[
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"menu", "top":0, "left":0, "height":8, "width":8}
  ],
  "contents":[
    {"name":"faqsDiv", "top":8, "left":0, "height":45, "width":48, "lineHeight":2.6, "fontSize":1.8, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":"How do I become a rich and<br>famous Radio K DJ?"},
    {"name":"regentsDiv", "top":53, "left":0, "height":5, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":"How do I become a rich and<br>famous Radio K DJ?"}
  ]
},
{"name":"contact", "vAlign":"middle", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":58,
  "boxes":[],
  "buttons":[
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"menu", "top":0, "left":0, "height":8, "width":8},
    {"name":"phone", "top":11, "left":9, "height":6, "width":30},
    {"name":"email", "top":18, "left":9, "height":6, "width":30},
    {"name":"tweet", "top":25, "left":9, "height":6, "width":30},
    {"name":"radiok", "top":33, "left":8, "height":20, "width":32}
  ],
  "contents":[
  ]
},
{"name":"shop", "vAlign":"top", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":58,
  "boxes":[],
  "buttons":[
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"menu", "top":0, "left":0, "height":8, "width":8}
  ],
  "contents":[
    {"name":"results", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="resultsHolder"><div id="resultsScroller"></div></div>'}
  ]
},
{"name":"shopempty", "vAlign":"top", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":58,
  "boxes":[],
  "buttons":[
    {"name":"home", "top":0, "left":40, "height":8, "width":8},
    {"name":"menu", "top":0, "left":0, "height":8, "width":8},
    {"name":"radiok", "top":33, "left":8, "height":20, "width":32}
  ],
  "contents":[
    {"name":"shopStatusDiv", "top":20, "left":1, "width":46, "height":8, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":"Sorry... this track not found in iTunes Store."},  ]
},

];
var monToMM={"Jan":"01", "Feb":"02", "Mar":"03", "Apr":"04", "May":"05", "Jun":"06", "Jul":"07", "Aug":"08", "Sep":"09", "Oct":"10", "Nov":"11", "Dec":"12"};
var monToMonth={"Jan":"January", "Feb":"February", "Mar":"March", "Apr":"April", "May":"May", "Jun":"June", "Jul":"July", "Aug":"August", "Sep":"September", "Oct":"October", "Nov":"November", "Dec":"December"};
/* extras for ref
    {"name":"totdBox", "top":24.5, "left":6, "width":12, "height":12, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":" "},

    {"name":"totd", "top":25, "left":6.5, "height":11, "width":11},

    {"name":"totdDesc", "top":37, "left":.5, "width":23, "height":2, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":"<a href=\"javascript:handleButton('extras','totd');\">TRACK OF THE DAY</a>"},

*/