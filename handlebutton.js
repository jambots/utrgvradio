
function handleButton(pageName, buttonName){
  console.log("handleButton("+pageName+", "+buttonName+")");
  if(buttonName != "events"){buttonOff("footnav", "events");}
  if(buttonName != "playlist"){buttonOff("footnav", "playlist");}

  if(buttonName=="home"){
    buttonOn(currentPage, "home");
    window.setTimeout('buttonOff("'+currentPage+'", "home"); selectPage("home");', navDelay);
    StatusBar.hide();
    }
  if(buttonName=="menu"){
    buttonOn(currentPage, "menu");
    window.setTimeout('buttonOff("'+currentPage+'", "menu"); selectPage("menu");', navDelay);
StatusBar.hide();
    }
  if(pageName=="footnav"){
    if(buttonName=="events"){
      getCalendarJson();
      selectPage("events");
      buttonOn("footnav", "events");
      buttonOff("footnav", "playlist");
      }
    if(buttonName=="playlist"){
      selectPage("playlist");
      buttonOff("footnav", "events");
      buttonOn("footnav", "playlist");
      window.setTimeout('selectPage("playlist");', navDelay);
      getRecentSongsJson();
      }
    if(buttonName=="donate"){
      buttonOn("footnav", "donate");
      window.setTimeout('buttonOff("footnav", "donate")', navDelay*2);
      window.setTimeout("remoteLink('https://www.radiok.org/donate/')", navDelay);
      }
    }

  if(pageName=="home"){
    if(buttonName=="playpause"){
      togglePlaying();
      }
    }

  if(pageName=="menu"){
    if(buttonName=="ondemand"){
      buttonOn("menu", "ondemand");
      window.setTimeout('buttonOff("menu", "ondemand"); getDownloads(); selectPage("ondemand");', navDelay);
      }
    if(buttonName=="alarm"){
      buttonOn("menu", "alarm");
      window.setTimeout('buttonOff("menu", "alarm"); selectPage("alarm");', navDelay);
      }
    if(buttonName=="quality"){
      buttonOn("menu", "quality");
      window.setTimeout('buttonOff("menu", "quality"); selectPage("quality");   buttonOn("quality", genericGet("quality"));', navDelay);
      }
    if(buttonName=="faqs"){
      buttonOn("menu", "faqs");
      window.setTimeout('buttonOff("menu", "faqs"); selectPage("faqs");', navDelay);
      }
    if(buttonName=="contact"){
      buttonOn("menu", "contact");
      window.setTimeout('buttonOff("menu", "contact"); selectPage("contact");', navDelay);
      }
    }

  if(pageName=="alarm"){
    if(buttonName=="timeset"){
      mouseStartX=mouseX;
      mouseStartY=mouseY;
      var buttLeft=pages[numOfPage('alarm')].buttons[numOfButton("alarm", "timeset")].left*grid+leftOffset;
      var buttWidth=pages[numOfPage('alarm')].buttons[numOfButton("alarm", "timeset")].width*grid;
      deltaX=mouseX-buttLeft;
      var xFrac=deltaX/buttWidth;
      touchingDial=1;
      if(xFrac<.45){touchingDial=0;}
      if(xFrac>.65){touchingDial=2;}
      //alert("mouseX="+ mouseX+" buttLeft="+ buttLeft+ " deltax:"+deltaX+" / buttWidth:"+buttWidth+" = xFrac:"+xFrac);

      var mod=genericGet("alarmMinuteOfDay");
      if(touchingDial!=0){
        dials[0].initVal=(minuteOfDayToHour(mod)+11)%12;
        }
      else{
        dials[0].initVal=dials[0].atVal;
        }

      if(touchingDial!=1){
        dials[1].initVal=minuteOfDayToMin(mod);
        }
      else{
        dials[1].initVal=dials[1].atVal;
        }
      if(touchingDial!=2){
        dials[2].initVal=minuteOfDayToHalf(mod);
        }
      else{
        dials[2].initVal=dials[2].atVal;
        }
      dials[0].atVal=dials[0].initVal;
      dials[1].atVal=dials[1].initVal;
      dials[2].atVal=dials[2].initVal;
      dials[0].destVal=dials[0].initVal;
      dials[1].destVal=dials[1].initVal;
      dials[2].destVal=dials[2].initVal;

      dials[0].history=initHistory;
      dials[1].history=initHistory;
      dials[2].history=initHistory;

      }
    if(buttonName=="sleepset"){
      mouseStartX=mouseX;
      mouseStartY=mouseY;
      touchingDial=3;

      dials[3].initVal=dials[3].atVal;
      dials[3].atVal=dials[3].initVal;
      dials[3].destVal=dials[3].initVal;
      dials[3].history=initHistory;
      }

    if(buttonName=="set"){
      if(state.streamPlaying){pauseStream();}
      sleepSeconds=0;
      var mil=""+minuteOfDayToHH(genericGet("alarmMinuteOfDay"))+minuteOfDayToMM(genericGet("alarmMinuteOfDay"));
      buttonOn("alarm", "set");
      var textTime=minuteOfDayToHour(genericGet("alarmMinuteOfDay"))+":"+minuteOfDayToMM(genericGet("alarmMinuteOfDay"))+" "+minuteOfDayToAmPm(genericGet("alarmMinuteOfDay"));
      document.getElementById("page_armed_content_alarmtext").innerHTML="Alarm is set for <br />"+textTime+"<br />(do not close)";
      window.setTimeout('buttonOff("alarm", "set"); selectPage("armed");', navDelay);
      snoozeMinutes=0;
      state.alarmSet=true;
      window.plugins.insomnia.keepAwake();
      state.alarmTriggered=false;
      state.uiPlaying=false;
      state.streamCreated=false;
      pauseStream();

      buttonOff("home", "playpause");
      }
    if(buttonName=="cancel"){
      buttonOn("alarm", "cancel");
      ////window.setTimeout('buttonOff("alarm", "cancel"); buttonOn("footnav", "home"); selectPage("home");', navDelay);
      }
    }
  if(pageName=="wakeup"){
    if(buttonName=="alarmoff"){

      state.uiPlaying=false;
      buttonOff("home", "playpause");
      state.streamCreated=false;
      state.alarmTriggered=false;
      pauseStream();
      buttonOn("wakeup", "alarmoff");
      window.setTimeout('buttonOff("wakeup", "alarmoff"); selectPage("home");', navDelay);
      }
    if(buttonName=="snooze"){
      var nowDate=new Date();
      var nowMod=nowDate.getHours()*60+nowDate.getMinutes();
      snoozeMinutes=nowMod-genericGet("alarmMinuteOfDay")+7;
      var textTime=minuteOfDayToHour(genericGet("alarmMinuteOfDay")+snoozeMinutes)+":"+minuteOfDayToMM(genericGet("alarmMinuteOfDay")+snoozeMinutes)+" "+minuteOfDayToAmPm(genericGet("alarmMinuteOfDay")+snoozeMinutes);
      document.getElementById("page_armed_content_alarmtext").innerHTML="Alarm is set for <br />"+textTime+"<br />(do not close)";
      state.streamCreated=false;
      state.alarmTriggered=false;
      state.alarmSet=true;
      window.plugins.insomnia.keepAwake();
      state.uiPlaying=false;
      pauseStream();
      buttonOff("home", "playpause");
      buttonOn("wakeup", "snooze");
      window.setTimeout('buttonOff("wakeup", "snooze"); selectPage("armed");', navDelay);
      }
    }
  if(pageName=="armed"){
    if(buttonName=="cancelalarm"){
      buttonOn("armed", "cancelalarm");
      window.setTimeout('buttonOff("armed", "cancelalarm"); state.alarmSet=false; selectPage("alarm");', navDelay);
      window.plugins.insomnia.allowSleepAgain();
      }
    }

  if(pageName=="shop"){
    if(buttonName=="done"){
      buttonOn("shop", "done");
      ////window.setTimeout('buttonOff("shop", "done"); buttonOn("footnav", "home"); selectPage("home");', navDelay);
      }
    }
  if(pageName=="shopempty"){
    if(buttonName=="done"){
      buttonOn("shopempty", "done");
      ////window.setTimeout('buttonOff("shopempty", "done"); buttonOn("footnav", "home"); selectPage("home");', navDelay);
      }
    }
  if(pageName=="ondemand"){
    if(buttonName=="done"){
      buttonOn("ondemand", "done");
      ////window.setTimeout('buttonOff("ondemand", "done"); buttonOn("footnav", "home"); selectPage("home");', navDelay);
      }
/*
    if(buttonName=="rks"){
      buttonOn("ondemand", "rks");
      window.setTimeout('buttonOff("ondemand", "rks"); selectPage("rks");', navDelay);
      }
*/
    if(buttonName=="wrs"){
      buttonOn("ondemand", "wrs");
      window.setTimeout('buttonOff("ondemand", "wrs"); selectPage("wrs");', navDelay);
      }
    if(buttonName=="rcp"){
      buttonOn("ondemand", "rcp");
      window.setTimeout('buttonOff("ondemand", "rcp"); selectPage("rcp");', navDelay);
      }
    if(buttonName=="ksc"){
      buttonOn("ondemand", "ksc");
      window.setTimeout('buttonOff("ondemand", "ksc"); selectPage("ksc");', navDelay);
      }
    if(buttonName=="inst"){
      instPage=1;
      buttonOn("ondemand", "inst");
      window.setTimeout('buttonOff("ondemand", "inst"); selectPage("inst");', navDelay);
      }

    }
  if(pageName=="inst"){
    if(buttonName=="done"){
      buttonOn("inst", "done");
      window.setTimeout('buttonOff("inst", "done"); selectPage("ondemand");', navDelay);
      }
    }
/*
  if(pageName=="rks"){
    if(buttonName=="done"){
      buttonOn("rks", "done");
      window.setTimeout('buttonOff("rks", "done"); selectPage("ondemand");', navDelay);
      }
    if(buttonName=="srks"){
      buttonOn("rks", "srks");
      window.setTimeout('buttonOff("rks", "srks"); remoteLink("https://itunes.apple.com/us/podcast/radio-k-k-sessions/id1183916920?mt=2");', navDelay);
      }
    }
*/
  if(pageName=="rcp"){
    if(buttonName=="done"){
      buttonOn("rcp", "done");
      window.setTimeout('buttonOff("rcp", "done"); selectPage("ondemand");', navDelay);
      }
    if(buttonName=="srcp"){
      buttonOn("rcp", "srcp");
      window.setTimeout('buttonOff("rcp", "srcp"); remoteLink("https://itunes.apple.com/us/podcast/real-college-podcast/id1018935053?mt=2");', navDelay);
      }
    }

  if(pageName=="wrs"){
    if(buttonName=="done"){
      buttonOn("wrs", "done");
      window.setTimeout('buttonOff("wrs", "done"); selectPage("ondemand");', navDelay);
      }
    }
  if(pageName=="ksc"){
    if(buttonName=="done"){
      buttonOn("ksc", "done");
      window.setTimeout('buttonOff("ksc", "done"); selectPage("ondemand");', navDelay);
      }
    }
  if(pageName=="quality"){
    if(buttonName=="medium"){
      eventStack.push("setting medium");
      buttonOn("quality", "medium");
      buttonOff("quality", "higher");
      genericSet("quality", "medium");
      }
    if(buttonName=="higher"){
      eventStack.push("setting higher");
      buttonOff("quality", "medium");
      buttonOn("quality", "higher");
      genericSet("quality", "higher");
      }
    }
  if(pageName=="faqs"){
    }
  if(pageName=="events"){
    }
  if(pageName=="contact"){
    if(buttonName=="phone"){
      buttonOn("contact", "phone");
      window.setTimeout('buttonOff("contact", "phone")', navDelay*2);
      //window.location='tel:+16126264770';
      window.setTimeout("remoteLink('tel:+16126264770')", navDelay);
      }
    if(buttonName=="email"){
      buttonOn("contact", "email");
      window.setTimeout('buttonOff("contact", "email")', navDelay*2);
      window.setTimeout("remoteLink('mailto:radiokdj@umn.edu?subject=Request from Radio K app')", navDelay);
      }
    if(buttonName=="tweet"){
      buttonOn("contact", "tweet");
      window.setTimeout('buttonOff("contact", "tweet")', navDelay*2);
      window.setTimeout("remoteLink('https://twitter.com/intent/tweet?source=webclient&text=%40RadioK+%23Request')", navDelay);
      }
    }
  if(pageName=="playlist"){
    }
  }
