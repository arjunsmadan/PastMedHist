// var text2 = '{ 	"Past_Medical_History":{ 		"Title": "PAST MEDICAL HISTORY: Please answer the following questions about your past medical history and leave any necessary comments.", 		"Questions":{  			"Personal_History":{ 				"Title": "Personal history:", 				"Questions":{  					"Headaches":{ 						"Text": "Headaches/migraines", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Depression":{ 						"Text": "Depression", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Anxiety":{ 						"Text": "Anxiety", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Mood":{ 						"Text": "Mood changes", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Disability":{ 						"Text": "Diagnosed learning disability", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"PleaseList":{ 						"Text": "Please list:", 						"Answer_Type": "text", 						"answer": "" 					}  				}  			},   			"Family_History":{ 				"Title": "Family history", 				"Questions":{ 					"Headaches":{ 						"Text": "Headaches/migraines", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Depression":{ 						"Text": "Depression", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Anxiety":{ 						"Text": "Anxiety", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Mood":{ 						"Text": "Mood changes", 						"Answer_Type": "checkbox", 						"answer": "no" 					} 				} 			},  			"Birth":{ 				"Title": "Birth", 				"Questions":{ 					"Full":{ 						"Text": "Full term", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Premature":{ 						"Text": "Premature (please specify at how many weeks of gestation)", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Vaginal":{ 						"Text": "Vaginal", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"CSection":{ 						"Text": "C-section (please specify the indication", 						"Answer_Type": "checkbox", 						"answer": "no" 					} 				} 			},  			"Milestones":{ 				"Title": "Did you reach developmental milestones on time growing up?", 				"Questions":{ 					"Reach":{ 						"Text": "Did you reach developmental milestones on time growing up?", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"IfNo":{ 						"Text": "If no, please explain", 						"Answer_Type": "text", 						"answer": "" 					} 				} 			},  			"Drugs_Pre":{ 				"Title": "Pre-injury", 				"Questions":{ 					"Alcohol":{ 						"Text": "Did you consume alcohol?", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Cigarettes":{ 						"Text": "Did you smoke cigarettes?", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Marijuana":{ 						"Text": "Did you smoke marijuana?", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Drugs":{ 						"Text": "Did you use recreational drugs?", 						"Answer_Type": "checkbox", 						"answer": "no" 					} 				} 			},  			"Drugs_Post":{ 				"Title": "Post-injury", 				"Questions":{ 					"Alcohol":{ 						"Text": "Did you consume alcohol?", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Cigarettes":{ 						"Text": "Did you smoke cigarettes?", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Marijuana":{ 						"Text": "Did you smoke marijuana?", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Drugs":{ 						"Text": "Did you use recreational drugs?", 						"Answer_Type": "checkbox", 						"answer": "no" 					} 				} 			}  		} 	} }';  
// var obj2 = JSON.parse(text2);
// var text2 = '{ 	"Past_Medical_History":{ 		"Title": "Past Medical History: Please answer the following questions about your past medical history and leave any necessary comments.", 		"Questions":[ 			{ 				"Title": "Personal history", 				"Questions":{  					"Headaches":{ 						"Text": "Headaches/migraines", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Depression":{ 						"Text": "Depression", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Anxiety":{ 						"Text": "Anxiety", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Mood":{ 						"Text": "Mood changes", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Disability":{ 						"Text": "Diagnosed learning disability", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"PleaseList":{ 						"Text": "Please list:", 						"Answer_Type": "text", 						"answer": "" 					}  				}  			},   			{ 				"Title": "Family history", 				"Questions":{ 					"Headaches":{ 						"Text": "Headaches/migraines", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Depression":{ 						"Text": "Depression", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Anxiety":{ 						"Text": "Anxiety", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Mood":{ 						"Text": "Mood changes", 						"Answer_Type": "checkbox", 						"answer": "no" 					} 				} 			},  			{ 				"Title": "Birth", 				"Questions":{ 					"Full":{ 						"Text": "Full term", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Premature":{ 						"Text": "Premature (please specify at how many weeks of gestation)", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Vaginal":{ 						"Text": "Vaginal", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"CSection":{ 						"Text": "C-section (please specify the indication", 						"Answer_Type": "checkbox", 						"answer": "no" 					} 				} 			},  			{ 				"Title": "Did you reach developmental milestones on time growing up?", 				"Questions":{ 					"Reach":{ 						"Text": "Did you reach developmental milestones on time growing up?", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"IfNo":{ 						"Text": "If no, please explain", 						"Answer_Type": "text", 						"answer": "" 					} 				} 			},  			{ 				"Title": "Pre-injury", 				"Questions":{ 					"Alcohol":{ 						"Text": "Full term", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Cigarettes":{ 						"Text": "Premature (please specify at how many weeks of gestation)", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Marijuana":{ 						"Text": "Vaginal", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Drugs":{ 						"Text": "C-section (please specify the indication", 						"Answer_Type": "checkbox", 						"answer": "no" 					} 				} 			},  			{ 				"Title": "Post-injury", 				"Questions":{ 					"Alcohol":{ 						"Text": "Full term", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Cigarettes":{ 						"Text": "Premature (please specify at how many weeks of gestation)", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Marijuana":{ 						"Text": "Vaginal", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					"Drugs":{ 						"Text": "C-section (please specify the indication", 						"Answer_Type": "checkbox", 						"answer": "no" 					} 				} 			}  		] 	} }'; 
// var obj2 = JSON.parse(text2);
var text = '{ 	"Past_Medical_History":{ 		"Title": "Past Medical History: Please answer the following questions about your past medical history and leave any necessary comments.", 		"Questions":[ 			{ 				"Title": "Personal history", 				"Questions":[ 					{ 						"Text": "Headaches/migraines", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "Depression", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "Anxiety", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "Mood changes", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "Diagnosed learning disability. Please list:", 						"Answer_Type": "checkboxWithText", 						"answer": "no", 						"answerText": "" 					}  				]  			},   			{ 				"Title": "Family history", 				"Questions":[ 					{ 						"Text": "Headaches/migraines", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "Depression", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "Anxiety", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "Mood changes", 						"Answer_Type": "checkbox", 						"answer": "no" 					} 				] 			},  			{ 				"Title": "Birth", 				"Questions":[ 					{ 						"Text": "Full term", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "Premature (please specify at how many weeks of gestation)", 						"Answer_Type": "checkboxWithText", 						"answer": "no", 						"answerText": "" 					}, 					{ 						"Text": "Vaginal", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "C-section (please specify the indication", 						"Answer_Type": "checkboxWithText", 						"answer": "no", 						"answerText": "" 					} 				] 			},  			{ 				"Title": "Developmental Milestones", 				"Questions":[ 					{ 						"Text": "Did you reach developmental milestones on time growing up? If no, please explain.", 						"Answer_Type": "checkboxWithText", 						"answer": "no", 						"answerText": "" 					} 				] 			},  			{ 				"Title": "Pre-injury drugs", 				"Questions":[ 					{ 						"Text": "Did you consume alcohol?", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "Did you smoke cigarettes?", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "Did you smoke marijuana?", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "Did you use recreational drugs?", 						"Answer_Type": "checkbox", 						"answer": "no" 					} 				] 			},  			{ 				"Title": "Post-injury drugs", 				"Questions":[ 					{ 						"Text": "Did you consume alcohol?", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "Did you smoke cigarettes?", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "Did you smoke marijuana?", 						"Answer_Type": "checkbox", 						"answer": "no" 					}, 					{ 						"Text": "Did you use recreational drugs?", 						"Answer_Type": "checkbox", 						"answer": "no" 					} 				] 			}  		] 	} }';
var obj = JSON.parse(text);

var linebreak = document.createElement("br");
var everything = document.getElementById("everything")

var mainTitle = document.createElement("div");
mainTitle.innerHTML = obj.Past_Medical_History.Title;
everything.appendChild(mainTitle);
document.getElementById("submit").addEventListener("click", check);
document.getElementById("summary").addEventListener("click", summary);


for (i = 0; i < obj.Past_Medical_History.Questions.length; i++){
	var tempTitle = document.createElement("div");
	tempTitle.innerHTML = obj.Past_Medical_History.Questions[i].Title;
	everything.appendChild(tempTitle);
	var linebreak = document.createElement("br");
	everything.appendChild(linebreak);
	for (j = 0; j < obj.Past_Medical_History.Questions[i].Questions.length; j++){
		var tempQuestion = document.createElement("div");
		tempQuestion.innerHTML = obj.Past_Medical_History.Questions[i].Questions[j].Text;
		everything.appendChild(tempQuestion);
		if (obj.Past_Medical_History.Questions[i].Questions[j].Answer_Type == "checkbox"){
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.id = i.toString() + j.toString() + "checkbox";
			everything.appendChild(checkbox);
		}
		else if (obj.Past_Medical_History.Questions[i].Questions[j].Answer_Type == "checkboxWithText"){
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.id = i.toString() + j.toString() + "checkbox";
			var text = document.createElement("input");
			text.type = "text";
			text.id = i.toString() + j.toString() + "text";
			everything.appendChild(checkbox);
			everything.appendChild(text);
		}
		var linebreak = document.createElement("br");
		everything.appendChild(linebreak);
	}
}
// var test = document.getElementById("00");
// console.log(test.checked);
var x = 0;
console.log(document.getElementById(x.toString() + x.toString() + "checkbox").checked);

console.log(document.getElementById("04text").value);

function check(){
	for (i = 0; i < obj.Past_Medical_History.Questions.length; i++){
		for (j = 0; j < obj.Past_Medical_History.Questions[i].Questions.length; j++){
			if (obj.Past_Medical_History.Questions[i].Questions[j].Answer_Type == "checkbox"){
				var name = i.toString() + j.toString() + "checkbox";
				var check = document.getElementById(name).checked;
				localStorage.setItem(name, check.toString());
			}
			else if (obj.Past_Medical_History.Questions[i].Questions[j].Answer_Type == "checkboxWithText"){
				var checkName = i.toString() + j.toString() + "checkbox";
				var check = document.getElementById(checkName).checked;
				var textName = i.toString() + j.toString() + "text";
				var text = document.getElementById(textName).value;
				localStorage.setItem(checkName, check.toString());
				localStorage.setItem(textName, text);
			}


		}
	}

}//function check() end

function summary(){
	var newPage = window.open("");
	var all = "";
	all+="<h1>Summary of Results</h1>";
	for (i = 0; i < obj.Past_Medical_History.Questions.length; i++){
		all += "<div>" + obj.Past_Medical_History.Questions[i].Title + "</div>";
		for (j = 0; j < obj.Past_Medical_History.Questions[i].Questions.length; j++){
			all += "<div>" + obj.Past_Medical_History.Questions[i].Questions[j].Text + ": ";
			if (obj.Past_Medical_History.Questions[i].Questions[j].Answer_Type == "checkbox"){
				var name = i.toString() + j.toString() + "checkbox";
				var value = localStorage.getItem(name);
				if (value == "true"){
					all += "Yes";
				}
				else {
					all += "No";
				}
			}
			else if (obj.Past_Medical_History.Questions[i].Questions[j].Answer_Type == "checkboxWithText"){
				var checkName = i.toString() + j.toString() + "checkbox";
				var textName = i.toString() + j.toString() + "text";
				var checkValue = localStorage.getItem(checkName);
				var textValue = localStorage.getItem(textName);
				if (checkValue == "true"){
					all += "Yes";
				}
				else {
					all += "No";
				}
				if (textValue == ""){
					all += "";
				}
				else {
					all += ", " + textValue;
				}
			}
		}
		all += "<br></br>";

	}
	newPage.document.write("<html><head><title></title></head><body>" + all + "</body></html>");
}