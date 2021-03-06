var jqueryNoConflict = jQuery;

// begin main function
jqueryNoConflict(document).ready(function(){

    initializeTabletopObject('1-lYZKBPoxCLYt_vbj0IF3o8ufYsDwPWXdWzQ69Mnsm8');

});

// pull data from google spreadsheet
function initializeTabletopObject(dataSpreadsheet){
    Tabletop.init({
        key: dataSpreadsheet,
        callback: writeTableWith,
        simpleSheet: true,
        debug: false
    });
}

// create table headers
function createTableColumns(){

    /* swap out the properties of mDataProp & sTitle to reflect
    the names of columns or keys you want to display.
    Remember, tabletop.js strips out spaces from column titles, which
    is what happens with the More Info column header */

    var tableColumns =   [
		{'mDataProp': 'Full Name', 'sTitle': 'Full Name', 'sClass': 'center'},
		{'mDataProp': 'Job Title', 'sTitle': 'Job Title', 'sClass': 'center'},
		{'mDataProp': 'Annual Salary', 'sTitle': 'Annual Salary', 'sClass': 'center'},
        {'mDataProp': 'Hourly Rate', 'sTitle': 'Hourly Rate', 'sClass': 'center'},
        {'mDataProp': 'VP Area', 'sTitle': 'VP Area', 'sClass': 'center'},
        {'mDataProp': 'Org Major Budget Unit', 'sTitle': 'Org Major Budget Unit', 'sClass': 'center'}

	];
    return tableColumns;
}

// create the table container and object
function writeTableWith(dataSource){

    jqueryNoConflict('#demo').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container"></table>');

    var oTable = jqueryNoConflict('#data-table-container').dataTable({
		'sPaginationType': 'bootstrap',
		'iDisplayLength': 25,
        'aaData': dataSource,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });
};

//define two custom functions (asc and desc) for string sorting
jQuery.fn.dataTableExt.oSort['string-case-asc']  = function(x,y) {
	return ((x < y) ? -1 : ((x > y) ?  0 : 0));
};

jQuery.fn.dataTableExt.oSort['string-case-desc'] = function(x,y) {
	return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};
