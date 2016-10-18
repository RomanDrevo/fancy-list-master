function addCheckbox(name) {
    var container = $('ul');
    var inputs = container.find('input');
    var id = inputs.length+1;
    var input = $('<input />', { type: 'checkbox', id: 'cb'+id, value: name });
    var label = $('<label />', { 'for': 'cb'+id, text: name });
    var li = $('<li />').append('<img src="checkbox_small.png" width="30px" height="30px" class="unchecked chbx align">').append(input).append(label);
    li.appendTo(container);
}

var animals = ['Dog', 'Cat', 'Fish'];


for(var i = 0; i<animals.length; i++){
    addCheckbox(animals[i]);
}

var checkboxes = $(".chbx"),
    checkAll = $('#all');

function AllUnchecked() {
    for(var i = 0; i<checkboxes.length; i++){
        if(!$(checkboxes[i]).hasClass('unchecked')) {
            console.log('Checkbox' + checkboxes[i] + 'is checked!');
            return false;
        }
    }
    return true;
}

function AllChecked () {
    for(var i = 0; i<checkboxes.length; i++){
        if($(checkboxes[i]).hasClass('unchecked')) {
            console.log('Checkbox' + checkboxes[i] + 'is UNchecked!');
            return false;
        }
    }
    return true;
}

function partChecked() {
    if(!AllChecked() && !AllUnchecked()){
        return true;
    }
    return false;
}

function updateStatusHandler() {
    if(partChecked()){
        checkAll.addClass('half-checked');
        checkAll.removeClass('unchecked');
    } else if(AllChecked()){
        checkAll.removeClass('half-checked');
        checkAll.removeClass('unchecked');
    } else if(AllUnchecked){
        checkAll.removeClass('half-checked');
        checkAll.addClass('unchecked');
    }
}

checkAll.on('click', function () {
    checkAll.removeClass('half-checked');

    if(checkAll.hasClass('unchecked')){
        checkAll.removeClass('unchecked');

        checkboxes.each(function () {
            $(this).removeClass('unchecked');
        })
    }


    else if(!checkAll.hasClass('unchecked')){
        checkAll.addClass('unchecked');
        checkboxes.each(function () {
            $(this).addClass('unchecked');
        })
    }
});

checkboxes.on('click', function () {

    $(this).toggleClass('unchecked');
    updateStatusHandler();
});



