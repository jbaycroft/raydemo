//v.3.5 build 120822
/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
You allowed to use this component or parts of it under GPL terms
To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
*/
dhtmlXGridObject.prototype.enableSmartRendering=function(e,t,n){arguments.length>2&&(t&&!this.rowsBuffer[t-1]&&(this.rowsBuffer[t-1]=0),t=n),this._srnd=convertStringToBoolean(e),this._srdh=this._srdh||20,this._dpref=t||0},dhtmlXGridObject.prototype.enablePreRendering=function(e){this._srnd_pr=parseInt(e||50)},dhtmlXGridObject.prototype.forceFullLoading=function(e,t){for(var n=0;n<this.rowsBuffer.length;n++)if(!this.rowsBuffer[n]){var r=e||this.rowsBuffer.length-n;if(this.callEvent("onDynXLS",[n,r])){var i=this;this.load(this.xmlFileUrl+getUrlSymbol(this.xmlFileUrl)+"posStart="+n+"&count="+r,function(){window.setTimeout(function(){i.forceFullLoading(e,t)},100)},this._data_type)}return}t&&t.call(this)},dhtmlXGridObject.prototype.setAwaitedRowHeight=function(e){this._srdh=parseInt(e)},dhtmlXGridObject.prototype._get_view_size=function(){return Math.floor(parseInt(this.entBox.offsetHeight)/this._srdh)+2},dhtmlXGridObject.prototype._add_filler=function(e,t,n,r){if(!t)return null;var i="__filler__",s=this._prepareRow(i);s.firstChild.style.width="1px";for(var o=1;o<s.childNodes.length;o++)s.childNodes[o].style.display="none";return s.firstChild.style.height=t*this._srdh+"px",(n=n||this.rowsCol[e])&&n.nextSibling?n.parentNode.insertBefore(s,n.nextSibling):_isKHTML?this.obj.appendChild(s):this.obj.rows[0].parentNode.appendChild(s),this.callEvent("onAddFiller",[e,t,s,n,r]),[e,t,s]},dhtmlXGridObject.prototype._update_srnd_view=function(){var e=Math.floor(this.objBox.scrollTop/this._srdh),t=e+this._get_view_size();if(this.multiLine){for(var n=this.objBox.scrollTop,e=0;n>0;)n-=this.rowsCol[e]?this.rowsCol[e].offsetHeight:this._srdh,e++;t=e+this._get_view_size(),e>0&&e--}t+=this._srnd_pr||0,t>this.rowsBuffer.length&&(t=this.rowsBuffer.length);for(var r=e;r<t;r++)if(!this.rowsCol[r]){var i=this._add_from_buffer(r);if(i==-1){if(this.xmlFileUrl){if(this._dpref&&this.rowsBuffer[t-1]){var s=this._dpref?this._dpref:t-r,o=Math.max(0,t-this._dpref);this._current_load=[o,t-o]}else this._current_load=[r,this._dpref?this._dpref:t-r];this.callEvent("onDynXLS",this._current_load)&&this.load(this.xmlFileUrl+getUrlSymbol(this.xmlFileUrl)+"posStart="+this._current_load[0]+"&count="+this._current_load[1],this._data_type)}return}(this._tgle&&(this._updateLine(this._h2.get[this.rowsBuffer[r].idd],this.rowsBuffer[r]),this._updateParentLine(this._h2.get[this.rowsBuffer[r].idd],this.rowsBuffer[r])),r&&r==(this._realfake?this._fake:this)._r_select)&&this.selectCell(r,this.cell?this.cell._cellIndex:0,!0)}this._fake&&!this._realfake&&this.multiLine&&(this._fake.objBox.scrollTop=this.objBox.scrollTop)},dhtmlXGridObject.prototype._add_from_buffer=function(e){var t=this.render_row(e);if(t==-1)return-1;if(t._attrs.selected||t._attrs.select)this.selectRow(t,!1,!0),t._attrs.selected=t._attrs.select=null;if(this._cssSP){if(this._h2){var n=this._h2.get[t.idd];t.className+=" "+(n.level%2?this._cssUnEven+" "+this._cssUnEven:this._cssEven+" "+this._cssEven)+"_"+n.level+(this.rowsAr[n.id]._css||"")}}else this._cssEven&&e%2==0?t.className=this._cssEven+(t.className.indexOf("rowselected")!=-1?" rowselected ":" ")+(t._css||""):this._cssUnEven&&e%2==1&&(t.className=this._cssUnEven+(t.className.indexOf("rowselected")!=-1?" rowselected ":" ")+(t._css||""));for(var r=0;r<this._fillers.length;r++){var i=this._fillers[r];if(i&&i[0]<=e&&i[0]+i[1]>e){var s=e-i[0];s==0?(this._insert_before(e,t,i[2]),this._update_fillers(r,-1,1)):s==i[1]-1?(this._insert_after(e,t,i[2]),this._update_fillers(r,-1,0)):(this._fillers.push(this._add_filler(e+1,i[1]-s-1,i[2],1)),this._insert_after(e,t,i[2]),this._update_fillers(r,-i[1]+s,0));break}}},dhtmlXGridObject.prototype._update_fillers=function(e,t,n){var r=this._fillers[e];r[1]+=t,r[0]+=n,r[1]?(r[2].firstChild.style.height=parseFloat(r[2].firstChild.style.height)+t*this._srdh+"px",this.callEvent("onUpdateFiller",[r[2]])):(this.callEvent("onRemoveFiller",[r[2]]),r[2].parentNode.removeChild(r[2]),this._fillers.splice(e,1))},dhtmlXGridObject.prototype._insert_before=function(e,t,n){n.parentNode.insertBefore(t,n),this.rowsCol[e]=t,this.callEvent("onRowInserted",[t,null,n,"before"])},dhtmlXGridObject.prototype._insert_after=function(e,t,n){n.nextSibling?n.parentNode.insertBefore(t,n.nextSibling):n.parentNode.appendChild(t),this.rowsCol[e]=t,this.callEvent("onRowInserted",[t,null,n,"after"])};