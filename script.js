/* count how many times the button is pushed so 
that I can use that as the ID to generate a unique ID for each element
to grab it.

var course (name, time, mandatory) = {
	this.name = name;
	this.time = time;
	this.mandatory = mandatory;
};

var createSchedule = function{

}; */

$(document).ready(function(){
	var courseCount = 0;
	var numCourses = 0;
	var addCount = 0;
	/*var course (name, time, mandatory) = {
		this.name = name;
		this.time = time;
		this.mandatory = mandatory;
	};

	function createSchedule {

	}; */



	$("#addMoreTime").click(function(){ /*needs click method*/
		/*add more inputs for time and day of week - might need to change quotatoin marks*/
		addCount++;
        //which time is it appending to?!
		$("#time").append("Select Days of the Week:</br>" + 
			"<input type='checkbox' name='days" + courseCount + "_" + addCount + "' value='Monday'>Monday</br>" +
			"<input type='checkbox' name='days" + courseCount + "_" + addCount + "' value='Tuesday'>Tuesday</br>" +
			"<input type='checkbox' name='days" + courseCount + "_" + addCount + "' value='Wednesday'>Wednesday</br>" +
			"<input type='checkbox' name='days" + courseCount + "_" + addCount + "' value='Thursday'>Thursday</br>" +
			"<input type='checkbox' name='days" + courseCount + "_" + addCount + "' value='Friday'>Friday</br>" +
    		"<input type='checkbox' name='days" + courseCount + "_" + addCount + "' value='Saturday'>Saturday</br>" +
    		"<input type='checkbox' name='days" + courseCount + "_" + addCount + "' value='Sunday'>Sunday</br>" +
    		"Please input 15 minute intervals for the time field and indicate am or pm without a colon between the hour and minutes.</br>" +
    		"Start Time:" +
    		"<input type='text' name='startTime" + courseCount + "_" + addCount + "' value='example: 100pm'>" +
    		"End Time:" +
    		"<input type='text' name='endTime" + courseCount + "_" + addCount + "' value='example: 1245pm'>");
	});
    $("#addCourse").click(function(){ /*needs click method*/
        /*add more inputs for time and day of week - might need to change quotatoin marks*/
        alert("HELLO WORLD!");
        $(#).append();
    });
	// $("#doneButton").click(function(){
		
 //        /*addCourse();*/
	// 	courseCount++;	
 //        var courseNameAdd = $('input[name=coursename]').val();
 //        var courseMandatory = $('input[name=mandatory]').val();
 //        var courseDateAndTime = [
 //        	/*create arrays*/
 //        	/*monday*/
 //        	[[00,0],[15,0],[30,0],[45,0],[100,0],[115,0],[130,0],[145,0],[200,0],[215,0],[230,0],[245,0],[300,0],[315,0],[330,0],[345,0],[400,0],[415,0],[430,0],[445,0],[500,0],[515,0],[530,0],[545,0],[600,0],[615,0],[630,0],[645,0],[700,0],[715,0],[730,0],[745,0],[800,0],[815,0],[830,0],[845,0],[900,0],[915,0],[930,0],[945,0],[1000,0],[1015,0],[1030,0],[1045,0],[1100,0],[1115,0],[1130,0],[1145,0],[1200,0],[1215,0],[1230,0],[1245,0],[1300,0],[1315,0],[1330,0],[1345,0],[1400,0],[1415,0],[1430,0],[1445,0],[1500,0],[1515,0],[1530,0],[1545,0],[1600,0],[1615,0],[1630,0],[1645,0],[1700,0],[1715,0],[1730,0],[1745,0],[1800,0],[1815,0],[1830,0],[1845,0],[1900,0],[1915,0],[1930,0],[1945,0],[2000,0],[2015,0],[2030,0],[2045,0],[2100,0],[2115,0],[2130,0],[2145,0],[2200,0],[2215,0],[2230,0],[2245,0],[2300,0],[2315,0],[2330,0],[2345,0],[2400,0],[2415,0],[2430,0],[2445,0]],
 //        	[[00,0],[15,0],[30,0],[45,0],[100,0],[115,0],[130,0],[145,0],[200,0],[215,0],[230,0],[245,0],[300,0],[315,0],[330,0],[345,0],[400,0],[415,0],[430,0],[445,0],[500,0],[515,0],[530,0],[545,0],[600,0],[615,0],[630,0],[645,0],[700,0],[715,0],[730,0],[745,0],[800,0],[815,0],[830,0],[845,0],[900,0],[915,0],[930,0],[945,0],[1000,0],[1015,0],[1030,0],[1045,0],[1100,0],[1115,0],[1130,0],[1145,0],[1200,0],[1215,0],[1230,0],[1245,0],[1300,0],[1315,0],[1330,0],[1345,0],[1400,0],[1415,0],[1430,0],[1445,0],[1500,0],[1515,0],[1530,0],[1545,0],[1600,0],[1615,0],[1630,0],[1645,0],[1700,0],[1715,0],[1730,0],[1745,0],[1800,0],[1815,0],[1830,0],[1845,0],[1900,0],[1915,0],[1930,0],[1945,0],[2000,0],[2015,0],[2030,0],[2045,0],[2100,0],[2115,0],[2130,0],[2145,0],[2200,0],[2215,0],[2230,0],[2245,0],[2300,0],[2315,0],[2330,0],[2345,0],[2400,0],[2415,0],[2430,0],[2445,0]],
 //        	[[00,0],[15,0],[30,0],[45,0],[100,0],[115,0],[130,0],[145,0],[200,0],[215,0],[230,0],[245,0],[300,0],[315,0],[330,0],[345,0],[400,0],[415,0],[430,0],[445,0],[500,0],[515,0],[530,0],[545,0],[600,0],[615,0],[630,0],[645,0],[700,0],[715,0],[730,0],[745,0],[800,0],[815,0],[830,0],[845,0],[900,0],[915,0],[930,0],[945,0],[1000,0],[1015,0],[1030,0],[1045,0],[1100,0],[1115,0],[1130,0],[1145,0],[1200,0],[1215,0],[1230,0],[1245,0],[1300,0],[1315,0],[1330,0],[1345,0],[1400,0],[1415,0],[1430,0],[1445,0],[1500,0],[1515,0],[1530,0],[1545,0],[1600,0],[1615,0],[1630,0],[1645,0],[1700,0],[1715,0],[1730,0],[1745,0],[1800,0],[1815,0],[1830,0],[1845,0],[1900,0],[1915,0],[1930,0],[1945,0],[2000,0],[2015,0],[2030,0],[2045,0],[2100,0],[2115,0],[2130,0],[2145,0],[2200,0],[2215,0],[2230,0],[2245,0],[2300,0],[2315,0],[2330,0],[2345,0],[2400,0],[2415,0],[2430,0],[2445,0]],
 //        	[[00,0],[15,0],[30,0],[45,0],[100,0],[115,0],[130,0],[145,0],[200,0],[215,0],[230,0],[245,0],[300,0],[315,0],[330,0],[345,0],[400,0],[415,0],[430,0],[445,0],[500,0],[515,0],[530,0],[545,0],[600,0],[615,0],[630,0],[645,0],[700,0],[715,0],[730,0],[745,0],[800,0],[815,0],[830,0],[845,0],[900,0],[915,0],[930,0],[945,0],[1000,0],[1015,0],[1030,0],[1045,0],[1100,0],[1115,0],[1130,0],[1145,0],[1200,0],[1215,0],[1230,0],[1245,0],[1300,0],[1315,0],[1330,0],[1345,0],[1400,0],[1415,0],[1430,0],[1445,0],[1500,0],[1515,0],[1530,0],[1545,0],[1600,0],[1615,0],[1630,0],[1645,0],[1700,0],[1715,0],[1730,0],[1745,0],[1800,0],[1815,0],[1830,0],[1845,0],[1900,0],[1915,0],[1930,0],[1945,0],[2000,0],[2015,0],[2030,0],[2045,0],[2100,0],[2115,0],[2130,0],[2145,0],[2200,0],[2215,0],[2230,0],[2245,0],[2300,0],[2315,0],[2330,0],[2345,0],[2400,0],[2415,0],[2430,0],[2445,0]],
 //        	[[00,0],[15,0],[30,0],[45,0],[100,0],[115,0],[130,0],[145,0],[200,0],[215,0],[230,0],[245,0],[300,0],[315,0],[330,0],[345,0],[400,0],[415,0],[430,0],[445,0],[500,0],[515,0],[530,0],[545,0],[600,0],[615,0],[630,0],[645,0],[700,0],[715,0],[730,0],[745,0],[800,0],[815,0],[830,0],[845,0],[900,0],[915,0],[930,0],[945,0],[1000,0],[1015,0],[1030,0],[1045,0],[1100,0],[1115,0],[1130,0],[1145,0],[1200,0],[1215,0],[1230,0],[1245,0],[1300,0],[1315,0],[1330,0],[1345,0],[1400,0],[1415,0],[1430,0],[1445,0],[1500,0],[1515,0],[1530,0],[1545,0],[1600,0],[1615,0],[1630,0],[1645,0],[1700,0],[1715,0],[1730,0],[1745,0],[1800,0],[1815,0],[1830,0],[1845,0],[1900,0],[1915,0],[1930,0],[1945,0],[2000,0],[2015,0],[2030,0],[2045,0],[2100,0],[2115,0],[2130,0],[2145,0],[2200,0],[2215,0],[2230,0],[2245,0],[2300,0],[2315,0],[2330,0],[2345,0],[2400,0],[2415,0],[2430,0],[2445,0]],
 //        	[[00,0],[15,0],[30,0],[45,0],[100,0],[115,0],[130,0],[145,0],[200,0],[215,0],[230,0],[245,0],[300,0],[315,0],[330,0],[345,0],[400,0],[415,0],[430,0],[445,0],[500,0],[515,0],[530,0],[545,0],[600,0],[615,0],[630,0],[645,0],[700,0],[715,0],[730,0],[745,0],[800,0],[815,0],[830,0],[845,0],[900,0],[915,0],[930,0],[945,0],[1000,0],[1015,0],[1030,0],[1045,0],[1100,0],[1115,0],[1130,0],[1145,0],[1200,0],[1215,0],[1230,0],[1245,0],[1300,0],[1315,0],[1330,0],[1345,0],[1400,0],[1415,0],[1430,0],[1445,0],[1500,0],[1515,0],[1530,0],[1545,0],[1600,0],[1615,0],[1630,0],[1645,0],[1700,0],[1715,0],[1730,0],[1745,0],[1800,0],[1815,0],[1830,0],[1845,0],[1900,0],[1915,0],[1930,0],[1945,0],[2000,0],[2015,0],[2030,0],[2045,0],[2100,0],[2115,0],[2130,0],[2145,0],[2200,0],[2215,0],[2230,0],[2245,0],[2300,0],[2315,0],[2330,0],[2345,0],[2400,0],[2415,0],[2430,0],[2445,0]],
 //        	[[00,0],[15,0],[30,0],[45,0],[100,0],[115,0],[130,0],[145,0],[200,0],[215,0],[230,0],[245,0],[300,0],[315,0],[330,0],[345,0],[400,0],[415,0],[430,0],[445,0],[500,0],[515,0],[530,0],[545,0],[600,0],[615,0],[630,0],[645,0],[700,0],[715,0],[730,0],[745,0],[800,0],[815,0],[830,0],[845,0],[900,0],[915,0],[930,0],[945,0],[1000,0],[1015,0],[1030,0],[1045,0],[1100,0],[1115,0],[1130,0],[1145,0],[1200,0],[1215,0],[1230,0],[1245,0],[1300,0],[1315,0],[1330,0],[1345,0],[1400,0],[1415,0],[1430,0],[1445,0],[1500,0],[1515,0],[1530,0],[1545,0],[1600,0],[1615,0],[1630,0],[1645,0],[1700,0],[1715,0],[1730,0],[1745,0],[1800,0],[1815,0],[1830,0],[1845,0],[1900,0],[1915,0],[1930,0],[1945,0],[2000,0],[2015,0],[2030,0],[2045,0],[2100,0],[2115,0],[2130,0],[2145,0],[2200,0],[2215,0],[2230,0],[2245,0],[2300,0],[2315,0],[2330,0],[2345,0],[2400,0],[2415,0],[2430,0],[2445,0]]
 //        ];
        
        
 //        var courseDay = [[0],[0],[0],[0],[0],[0],[0]];
 //        /*Put the time in here too! Count how many times added extra times and do it in a .each loop. 
 //        Add the call to the change time function in here too. By the time this is done all of the days and time slots should be completed. */
 //        $('input[name=days]:checked').each(function() {
 //        	/*use case statement to choose correct day*/
 //        	/*getTime(1100);
 //        	getTime(100);*/
 //        	var temp = $(this).val();
 //        	if(temp = "Monday"){
 //        		courseDay[0] = 1;
 //        	}
 //        	if(temp = "Tuesday"){
 //        		courseDay[1]=1;
 //        	}
 //        	if(temp = "Wednesday"){
 //        		courseDay[2]=1;
 //        	}
 //        	if(temp = "Thursday"){
 //        		courseDay[3]=1;
 //        	}
 //        	if(temp = "Friday"){
 //        		courseDay[4]=1;
 //        	}
 //        	if(temp = "Saturday"){
 //        		courseDay[5]=1;
 //        	}
 //        	if(temp = "Sunday"){
 //        		courseDay[6]=1;
 //        	}
 //        	alert(courseDay[0]);
 //       		/*courseDateAndTime.push($(this).val());*/
 //    	 });
 //        $(".list").append("<li class = 'item'>" + toAdd + "</li>");
        
 //        /*expand to caputer all fields*/
        
 //        /*gathers information to be collected in arrays or objects	?
 //        everytime adds might need to collapse the new times given?
 //        reset add count*/
 //    });
    $("#createSchedule").click(function(){
    	/*processes information and actually creates schedule*/
        var toAdd = $('input[name=coursename]').val();
        
    });
});

/*function addCourse() {
  var coursename = $('input[name=coursename]').val();
  alert(coursename + aCourse);
  aCourse = coursename;
}*/

/*function getTime(){
	var hour;
	var min;
	if (time.length()>5){
		hour = time[0] + "" + time[1];
		min = time[2] + "" + time[3];
	}
	else{
		hour = time[0];
		min = time[1] + "" + time[2];
	}
	alert(hour + ":" + min);
}*/
/*var courseList = [];*/




/*create class / object structure*/