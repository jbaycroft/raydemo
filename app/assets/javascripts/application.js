// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//Button Populate Javascript
//This determines which hazard buttons are shown in the task show view based on what checkboxes are selected in the task form
    $(document).ready(function () {
        var value = $('li.yes_no > #value, li.yes_no > #comma').text();
        var value = value.split(",");
        var index = $('li.yes_no > #index, li.yes_no > #comma').text();
        var index = index.split(",");
        var result = new Array();
        for (i = 0; i < index.length; i++) {
            var x = parseInt(index[i]);
            var y = parseInt(value[i]);
            result[i] = x * y;
        }
        for (var i = 0; i < result.length; i++) {
            var t = result[i];
            if (t == 1) {
                $('li.one').removeClass('hidden');
            }
            if (t == 2) {
                $('li.two').removeClass('hidden');
            }
            if (t == 3) {
                $('li.three').removeClass('hidden');
            }
            if (t == 4) {
                $('li.four').removeClass('hidden');
            }
            if (t == 5) {
                $('li.five').removeClass('hidden');
            }
            if (t == 6) {
                $('li.six').removeClass('hidden');
            }
            if (t == 7) {
                $('li.seven').removeClass('hidden');
            }
            if (t == 8) {
                $('li.eight').removeClass('hidden');
            }
            if (t == 9) {
                $('li.nine').removeClass('hidden');
            }
            if (t == 10) {
                $('li.ten').removeClass('hidden');
            }
            if (t == 11) {
                $('li.eleven').removeClass('hidden');
            }
            if (t == 12) {
                $('li.twelve').removeClass('hidden');
            }
            if (t == 13) {
                $('li.thirteen').removeClass('hidden');
            }
            if (t == 14) {
                $('li.fourteen').removeClass('hidden');
            }
            if (t == 15) {
                $('li.fifteen').removeClass('hidden');
            }
            if (t == 16) {
                $('li.sixteen').removeClass('hidden');
            }
            if (t == 17) {
                $('li.seventeen').removeClass('hidden');
            }
            if (t == 18) {
                $('li.eighteen').removeClass('hidden');
            }
            if (t == 19) {
                $('li.nineteen').removeClass('hidden');
            }
            if (t == 20) {
                $('li.twenty').removeClass('hidden');
            }
        }
    });
//Hazard Form Populate Javascript
//This determines which hazard form is shown when a hazard button is activated
    jQuery(function ($) {
        function changeTab(e) {
            e.preventDefault();
            $('li.yes_no div.active').removeClass("active");
            $(this).addClass("active");
            var det = $('.active').attr('id');
            var $$ = {
                'ha1': $('div.haz1'),
                    'ha2': $('div.haz2'),
                    'ha3': $('div.haz3'),
                    'ha4': $('div.haz4'),
                    'ha5': $('div.haz5'),
                    'ha6': $('div.haz6'),
                    'ha7': $('div.haz7'),
                    'ha8': $('div.haz8'),
                    'ha9': $('div.haz9'),
                    'ha10': $('div.haz10'),
                    'ha11': $('div.haz11'),
                    'ha12': $('div.haz12'),
                    'ha13': $('div.haz13'),
                    'ha14': $('div.haz14'),
                    'ha15': $('div.haz15'),
                    'ha16': $('div.haz16'),
                    'ha17': $('div.haz17'),
                    'ha18': $('div.haz18'),
                    'ha19': $('div.haz19'),
                    'ha20': $('div.haz20')
            };
            //ACCESS
            if (det == "haz1") {
                $$.ha1.show('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // BIOHAZ
            } else if (det == "haz2") {
                $$.ha1.hide('slow');
                $$.ha2.show('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // COWRK
            } else if (det == "haz3") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.show('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // CUT
            } else if (det == "haz4") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.show('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // ERGO
            } else if (det == "haz5") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.show('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // FALL
            } else if (det == "haz6") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.show('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // FIRE
            } else if (det == "haz7") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.show('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                //HAZATM
            } else if (det == "haz8") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.show('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // HAZENGY
            } else if (det == "haz9") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.show('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // HAZMAT
            } else if (det == "haz10") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.show('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // LAZ
            } else if (det == "haz11") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.show('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // LONEWRK
            } else if (det == "haz12") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.show('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // MAG
            } else if (det == "haz13") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.show('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // MECHAND
            } else if (det == "haz14") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.show('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // NOISE
            } else if (det == "haz15") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.show('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // OVRHEAD
            } else if (det == "haz16") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.show('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // RAD
            } else if (det == "haz17") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.show('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // ROAD
            } else if (det == "haz18") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.show('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
                // TEMP
            } else if (det == "haz19") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.show('slow');
                $$.ha20.hide('slow');
                // TOOL
            } else if (det == "haz20") {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.show('slow');
            } else {
                $$.ha1.hide('slow');
                $$.ha2.hide('slow');
                $$.ha3.hide('slow');
                $$.ha4.hide('slow');
                $$.ha5.hide('slow');
                $$.ha6.hide('slow');
                $$.ha7.hide('slow');
                $$.ha8.hide('slow');
                $$.ha9.hide('slow');
                $$.ha10.hide('slow');
                $$.ha11.hide('slow');
                $$.ha12.hide('slow');
                $$.ha13.hide('slow');
                $$.ha14.hide('slow');
                $$.ha15.hide('slow');
                $$.ha16.hide('slow');
                $$.ha17.hide('slow');
                $$.ha18.hide('slow');
                $$.ha19.hide('slow');
                $$.ha20.hide('slow');
            }
        }
        $("li.yes_no div").click(changeTab);
        $('li.complete').bind('click', function () {
            $('input#task_complete').prop("checked", true);
        });
    });
// Accesses Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_access_frequency_often'),
            'time':      $('#task_hazards_attributes_0_access_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_access_risk_severity'),
            'master':    $('#task_hazards_attributes_0_access_risk_mastery'),
            'frequency': $('#access_risk_frequency'),
            'total':     $('#access_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_access_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_access_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_access_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_access_new_risk_mastery'),
            'frequency': $('#access_new_risk_frequency'),
            'total':     $('#access_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// biohaz Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_biohaz_frequency_often'),
            'time':      $('#task_hazards_attributes_0_biohaz_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_biohaz_risk_severity'),
            'master':    $('#task_hazards_attributes_0_biohaz_risk_mastery'),
            'frequency': $('#biohaz_risk_frequency'),
            'total':     $('#biohaz_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_biohaz_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_biohaz_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_biohaz_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_biohaz_new_risk_mastery'),
            'frequency': $('#biohaz_new_risk_frequency'),
            'total':     $('#biohaz_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// cowrk Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_cowrk_frequency_often'),
            'time':      $('#task_hazards_attributes_0_cowrk_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_cowrk_risk_severity'),
            'master':    $('#task_hazards_attributes_0_cowrk_risk_mastery'),
            'frequency': $('#cowrk_risk_frequency'),
            'total':     $('#cowrk_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_cowrk_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_cowrk_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_cowrk_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_cowrk_new_risk_mastery'),
            'frequency': $('#cowrk_new_risk_frequency'),
            'total':     $('#cowrk_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// cut Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_cut_frequency_often'),
            'time':      $('#task_hazards_attributes_0_cut_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_cut_risk_severity'),
            'master':    $('#task_hazards_attributes_0_cut_risk_mastery'),
            'frequency': $('#cut_risk_frequency'),
            'total':     $('#cut_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_cut_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_cut_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_cut_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_cut_new_risk_mastery'),
            'frequency': $('#cut_new_risk_frequency'),
            'total':     $('#cut_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// ergo Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_ergo_frequency_often'),
            'time':      $('#task_hazards_attributes_0_ergo_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_ergo_risk_severity'),
            'master':    $('#task_hazards_attributes_0_ergo_risk_mastery'),
            'frequency': $('#ergo_risk_frequency'),
            'total':     $('#ergo_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_ergo_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_ergo_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_ergo_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_ergo_new_risk_mastery'),
            'frequency': $('#ergo_new_risk_frequency'),
            'total':     $('#ergo_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// fall Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_fall_frequency_often'),
            'time':      $('#task_hazards_attributes_0_fall_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_fall_risk_severity'),
            'master':    $('#task_hazards_attributes_0_fall_risk_mastery'),
            'frequency': $('#fall_risk_frequency'),
            'total':     $('#fall_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_fall_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_fall_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_fall_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_fall_new_risk_mastery'),
            'frequency': $('#fall_new_risk_frequency'),
            'total':     $('#fall_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// fire Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_fire_frequency_often'),
            'time':      $('#task_hazards_attributes_0_fire_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_fire_risk_severity'),
            'master':    $('#task_hazards_attributes_0_fire_risk_mastery'),
            'frequency': $('#fire_risk_frequency'),
            'total':     $('#fire_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_fire_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_fire_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_fire_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_fire_new_risk_mastery'),
            'frequency': $('#fire_new_risk_frequency'),
            'total':     $('#fire_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// hazatm Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_hazatm_frequency_often'),
            'time':      $('#task_hazards_attributes_0_hazatm_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_hazatm_risk_severity'),
            'master':    $('#task_hazards_attributes_0_hazatm_risk_mastery'),
            'frequency': $('#hazatm_risk_frequency'),
            'total':     $('#hazatm_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_hazatm_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_hazatm_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_hazatm_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_hazatm_new_risk_mastery'),
            'frequency': $('#hazatm_new_risk_frequency'),
            'total':     $('#hazatm_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// hazengy Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_hazengy_frequency_often'),
            'time':      $('#task_hazards_attributes_0_hazengy_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_hazengy_risk_severity'),
            'master':    $('#task_hazards_attributes_0_hazengy_risk_mastery'),
            'frequency': $('#hazengy_risk_frequency'),
            'total':     $('#hazengy_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_hazengy_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_hazengy_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_hazengy_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_hazengy_new_risk_mastery'),
            'frequency': $('#hazengy_new_risk_frequency'),
            'total':     $('#hazengy_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// hazmat Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_hazmat_frequency_often'),
            'time':      $('#task_hazards_attributes_0_hazmat_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_hazmat_risk_severity'),
            'master':    $('#task_hazards_attributes_0_hazmat_risk_mastery'),
            'frequency': $('#hazmat_risk_frequency'),
            'total':     $('#hazmat_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_hazmat_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_hazmat_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_hazmat_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_hazmat_new_risk_mastery'),
            'frequency': $('#hazmat_new_risk_frequency'),
            'total':     $('#hazmat_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// laz Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_laz_frequency_often'),
            'time':      $('#task_hazards_attributes_0_laz_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_laz_risk_severity'),
            'master':    $('#task_hazards_attributes_0_laz_risk_mastery'),
            'frequency': $('#laz_risk_frequency'),
            'total':     $('#laz_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_laz_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_laz_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_laz_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_laz_new_risk_mastery'),
            'frequency': $('#laz_new_risk_frequency'),
            'total':     $('#laz_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// lonewrk Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_lonewrk_frequency_often'),
            'time':      $('#task_hazards_attributes_0_lonewrk_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_lonewrk_risk_severity'),
            'master':    $('#task_hazards_attributes_0_lonewrk_risk_mastery'),
            'frequency': $('#lonewrk_risk_frequency'),
            'total':     $('#lonewrk_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_lonewrk_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_lonewrk_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_lonewrk_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_lonewrk_new_risk_mastery'),
            'frequency': $('#lonewrk_new_risk_frequency'),
            'total':     $('#lonewrk_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// mag Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_mag_frequency_often'),
            'time':      $('#task_hazards_attributes_0_mag_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_mag_risk_severity'),
            'master':    $('#task_hazards_attributes_0_mag_risk_mastery'),
            'frequency': $('#mag_risk_frequency'),
            'total':     $('#mag_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_mag_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_mag_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_mag_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_mag_new_risk_mastery'),
            'frequency': $('#mag_new_risk_frequency'),
            'total':     $('#mag_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// mechand Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_mechand_frequency_often'),
            'time':      $('#task_hazards_attributes_0_mechand_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_mechand_risk_severity'),
            'master':    $('#task_hazards_attributes_0_mechand_risk_mastery'),
            'frequency': $('#mechand_risk_frequency'),
            'total':     $('#mechand_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_mechand_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_mechand_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_mechand_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_mechand_new_risk_mastery'),
            'frequency': $('#mechand_new_risk_frequency'),
            'total':     $('#mechand_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// noise Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_noise_frequency_often'),
            'time':      $('#task_hazards_attributes_0_noise_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_noise_risk_severity'),
            'master':    $('#task_hazards_attributes_0_noise_risk_mastery'),
            'frequency': $('#noise_risk_frequency'),
            'total':     $('#noise_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_noise_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_noise_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_noise_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_noise_new_risk_mastery'),
            'frequency': $('#noise_new_risk_frequency'),
            'total':     $('#noise_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// ovrhead Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_ovrhead_frequency_often'),
            'time':      $('#task_hazards_attributes_0_ovrhead_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_ovrhead_risk_severity'),
            'master':    $('#task_hazards_attributes_0_ovrhead_risk_mastery'),
            'frequency': $('#ovrhead_risk_frequency'),
            'total':     $('#ovrhead_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_ovrhead_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_ovrhead_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_ovrhead_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_ovrhead_new_risk_mastery'),
            'frequency': $('#ovrhead_new_risk_frequency'),
            'total':     $('#ovrhead_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// rad Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_rad_frequency_often'),
            'time':      $('#task_hazards_attributes_0_rad_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_rad_risk_severity'),
            'master':    $('#task_hazards_attributes_0_rad_risk_mastery'),
            'frequency': $('#rad_risk_frequency'),
            'total':     $('#rad_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_rad_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_rad_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_rad_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_rad_new_risk_mastery'),
            'frequency': $('#rad_new_risk_frequency'),
            'total':     $('#rad_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// road Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_road_frequency_often'),
            'time':      $('#task_hazards_attributes_0_road_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_road_risk_severity'),
            'master':    $('#task_hazards_attributes_0_road_risk_mastery'),
            'frequency': $('#road_risk_frequency'),
            'total':     $('#road_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_road_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_road_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_road_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_road_new_risk_mastery'),
            'frequency': $('#road_new_risk_frequency'),
            'total':     $('#road_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// temp Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_temp_frequency_often'),
            'time':      $('#task_hazards_attributes_0_temp_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_temp_risk_severity'),
            'master':    $('#task_hazards_attributes_0_temp_risk_mastery'),
            'frequency': $('#temp_risk_frequency'),
            'total':     $('#temp_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_temp_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_temp_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_temp_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_temp_new_risk_mastery'),
            'frequency': $('#temp_new_risk_frequency'),
            'total':     $('#temp_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// tool Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_tool_frequency_often'),
            'time':      $('#task_hazards_attributes_0_tool_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_tool_risk_severity'),
            'master':    $('#task_hazards_attributes_0_tool_risk_mastery'),
            'frequency': $('#tool_risk_frequency'),
            'total':     $('#tool_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_tool_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_tool_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_tool_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_tool_new_risk_mastery'),
            'frequency': $('#tool_new_risk_frequency'),
            'total':     $('#tool_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.html(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });