//v.3.5 build 120822
/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
You allowed to use this component or parts of it under GPL terms
To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
*/
function dataProcessor(e){return this.serverProcessor=e,this.action_param="!nativeeditor_status",this.object=null,this.updatedRows=[],this.autoUpdate=!0,this.updateMode="cell",this._tMode="GET",this.post_delim="_",this._waitMode=0,this._in_progress={},this._invalid={},this.mandatoryFields=[],this.messages=[],this.styles={updated:"font-weight:bold;",inserted:"font-weight:bold;",deleted:"text-decoration : line-through;",invalid:"background-color:FFE0E0;",invalid_cell:"border-bottom:2px solid red;",clear:"font-weight:normal;text-decoration:none;"},this.enableUTFencoding(!0),dhtmlxEventable(this),this}dataProcessor.prototype={setTransactionMode:function(e,t){this._tMode=e,this._tSend=t},escape:function(e){return this._utf?encodeURIComponent(e):escape(e)},enableUTFencoding:function(e){this._utf=convertStringToBoolean(e)},setDataColumns:function(e){this._columns=typeof e=="string"?e.split(","):e},getSyncState:function(){return!this.updatedRows.length},enableDataNames:function(e){this._endnm=convertStringToBoolean(e)},enablePartialDataSend:function(e){this._changed=convertStringToBoolean(e)},setUpdateMode:function(e,t){this.autoUpdate=e=="cell",this.updateMode=e,this.dnd=t},ignore:function(e,t){this._silent_mode=!0,e.call(t||window),this._silent_mode=!1},setUpdated:function(e,t,n){if(!this._silent_mode){var r=this.findRow(e),n=n||"updated",i=this.obj.getUserData(e,this.action_param);i&&n=="updated"&&(n=i),t?(this.set_invalid(e,!1),this.updatedRows[r]=e,this.obj.setUserData(e,this.action_param,n),this._in_progress[e]&&(this._in_progress[e]="wait")):this.is_invalid(e)||(this.updatedRows.splice(r,1),this.obj.setUserData(e,this.action_param,"")),t||this._clearUpdateFlag(e),this.markRow(e,t,n),t&&this.autoUpdate&&this.sendData(e)}},_clearUpdateFlag:function(){},markRow:function(e,t,n){var r="",i=this.is_invalid(e);i&&(r=this.styles[i],t=!0);if(this.callEvent("onRowMark",[e,t,n,i])&&(r=this.styles[t?n:"clear"]+r,this.obj[this._methods[0]](e,r),i&&i.details)){r+=this.styles[i+"_cell"];for(var s=0;s<i.details.length;s++)i.details[s]&&this.obj[this._methods[1]](e,s,r)}},getState:function(e){return this.obj.getUserData(e,this.action_param)},is_invalid:function(e){return this._invalid[e]},set_invalid:function(e,t,n){n&&(t={value:t,details:n,toString:function(){return this.value.toString()}}),this._invalid[e]=t},checkBeforeUpdate:function(){return!0},sendData:function(e){if(!this._waitMode||this.obj.mytype!="tree"&&!this.obj._h2){this.obj.editStop&&this.obj.editStop();if(typeof e=="undefined"||this._tSend)return this.sendAllData();if(this._in_progress[e])return!1;this.messages=[];if(!this.checkBeforeUpdate(e)&&this.callEvent("onValidationError",[e,this.messages]))return!1;this._beforeSendData(this._getRowData(e),e)}},_beforeSendData:function(e,t){if(!this.callEvent("onBeforeUpdate",[t,this.getState(t),e]))return!1;this._sendData(e,t)},serialize:function(e,t){if(typeof e=="string")return e;if(typeof t!="undefined")return this.serialize_one(e,"");var n=[],r=[],i;for(i in e)e.hasOwnProperty(i)&&(n.push(this.serialize_one(e[i],i+this.post_delim)),r.push(i));return n.push("ids="+this.escape(r.join(","))),dhtmlx.security_key&&n.push("dhx_security="+dhtmlx.security_key),n.join("&")},serialize_one:function(e,t){if(typeof e=="string")return e;var n=[],r;for(r in e)e.hasOwnProperty(r)&&n.push(this.escape((t||"")+r)+"="+this.escape(e[r]));return n.join("&")},_sendData:function(e,t){if(e){if(!this.callEvent("onBeforeDataSending",t?[t,this.getState(t),e]:[null,null,e]))return!1;t&&(this._in_progress[t]=(new Date).valueOf());var n=new dtmlXMLLoaderObject(this.afterUpdate,this,!0),r=this.serverProcessor+(this._user?getUrlSymbol(this.serverProcessor)+["dhx_user="+this._user,"dhx_version="+this.obj.getUserData(0,"version")].join("&"):"");this._tMode!="POST"?n.loadXML(r+(r.indexOf("?")!=-1?"&":"?")+this.serialize(e,t)):n.loadXML(r,!0,this.serialize(e,t)),this._waitMode++}},sendAllData:function(){if(this.updatedRows.length){this.messages=[];for(var e=!0,t=0;t<this.updatedRows.length;t++)e&=this.checkBeforeUpdate(this.updatedRows[t]);if(!e&&!this.callEvent("onValidationError",["",this.messages]))return!1;if(this._tSend)this._sendData(this._getAllData());else for(t=0;t<this.updatedRows.length;t++)if(!this._in_progress[this.updatedRows[t]]&&!this.is_invalid(this.updatedRows[t])&&(this._beforeSendData(this._getRowData(this.updatedRows[t]),this.updatedRows[t]),this._waitMode&&(this.obj.mytype=="tree"||this.obj._h2)))break}},_getAllData:function(){for(var e={},t=!1,n=0;n<this.updatedRows.length;n++){var r=this.updatedRows[n];!this._in_progress[r]&&!this.is_invalid(r)&&this.callEvent("onBeforeUpdate",[r,this.getState(r)])&&(e[r]=this._getRowData(r,r+this.post_delim),t=!0,this._in_progress[r]=(new Date).valueOf())}return t?e:null},setVerificator:function(e,t){this.mandatoryFields[e]=t||function(e){return e!=""}},clearVerificator:function(e){this.mandatoryFields[e]=!1},findRow:function(e){for(var t=0,t=0;t<this.updatedRows.length;t++)if(e==this.updatedRows[t])break;return t},defineAction:function(e,t){this._uActions||(this._uActions=[]),this._uActions[e]=t},afterUpdateCallback:function(e,t,n,r){var i=e,s=n!="error"&&n!="invalid";s||this.set_invalid(e,n);if(this._uActions&&this._uActions[n]&&!this._uActions[n](r))return delete this._in_progress[i];this._in_progress[i]!="wait"&&this.setUpdated(e,!1);var o=e;switch(n){case"inserted":case"insert":t!=e&&(this.obj[this._methods[2]](e,t),e=t);break;case"delete":case"deleted":return this.obj.setUserData(e,this.action_param,"true_deleted"),this.obj[this._methods[3]](e),delete this._in_progress[i],this.callEvent("onAfterUpdate",[e,n,t,r])}this._in_progress[i]!="wait"?(s&&this.obj.setUserData(e,this.action_param,""),delete this._in_progress[i]):(delete this._in_progress[i],this.setUpdated(t,!0,this.obj.getUserData(e,this.action_param))),this.callEvent("onAfterUpdate",[e,n,t,r])},afterUpdate:function(e,t,n,r,i){i.getXMLTopNode("data");if(i.xmlDoc.responseXML){for(var s=i.doXPath("//data/action"),o=0;o<s.length;o++){var u=s[o],a=u.getAttribute("type"),f=u.getAttribute("sid"),l=u.getAttribute("tid");e.afterUpdateCallback(f,l,a,u)}e.finalizeUpdate()}},finalizeUpdate:function(){this._waitMode&&this._waitMode--,(this.obj.mytype=="tree"||this.obj._h2)&&this.updatedRows.length&&this.sendData(),this.callEvent("onAfterUpdateFinish",[]),this.updatedRows.length||this.callEvent("onFullSync",[])},init:function(e){this.obj=e,this.obj._dp_init&&this.obj._dp_init(this)},setOnAfterUpdate:function(e){this.attachEvent("onAfterUpdate",e)},enableDebug:function(){},setOnBeforeUpdateHandler:function(e){this.attachEvent("onBeforeDataSending",e)},setAutoUpdate:function(e,t){e=e||2e3,this._user=t||(new Date).valueOf(),this._need_update=!1,this._loader=null,this._update_busy=!1,this.attachEvent("onAfterUpdate",function(e,t,n,r){this.afterAutoUpdate(e,t,n,r)}),this.attachEvent("onFullSync",function(){this.fullSync()});var n=this;window.setInterval(function(){n.loadUpdate()},e)},afterAutoUpdate:function(e,t){return t=="collision"?(this._need_update=!0,!1):!0},fullSync:function(){return this._need_update==1&&(this._need_update=!1,this.loadUpdate()),!0},getUpdates:function(e,t){if(this._update_busy)return!1;this._update_busy=!0,this._loader=this._loader||new dtmlXMLLoaderObject(!0),this._loader.async=!0,this._loader.waitCall=t,this._loader.loadXML(e)},_v:function(e){return e.firstChild?e.firstChild.nodeValue:""},_a:function(e){for(var t=[],n=0;n<e.length;n++)t[n]=this._v(e[n]);return t},loadUpdate:function(){var e=this,t=this.obj.getUserData(0,"version"),n=this.serverProcessor+getUrlSymbol(this.serverProcessor)+["dhx_user="+this._user,"dhx_version="+t].join("&"),n=n.replace("editing=true&","");this.getUpdates(n,function(){var t=e._loader.doXPath("//userdata");e.obj.setUserData(0,"version",e._v(t[0]));var n=e._loader.doXPath("//update");if(n.length){e._silent_mode=!0;for(var r=0;r<n.length;r++){var i=n[r].getAttribute("status"),s=n[r].getAttribute("id"),o=n[r].getAttribute("parent");switch(i){case"inserted":e.callEvent("insertCallback",[n[r],s,o]);break;case"updated":e.callEvent("updateCallback",[n[r],s,o]);break;case"deleted":e.callEvent("deleteCallback",[n[r],s,o])}}e._silent_mode=!1}e._update_busy=!1,e=null})}};