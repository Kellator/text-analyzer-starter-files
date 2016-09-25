//splits array by end punctuation the divides total word count by number of sentences to get average words per sentence
function getWordsPerSentence(text) {
	var numOfSentences = text.split(/[!.?]+/).filter(Boolean).length;;
	var wordCount = removePunctuation(text).length;
	return (wordCount / numOfSentences).toFixed(2);
}
//gets average length of each word
function getAvgWordLength(simpleText) {
	var totalLength = simpleText.join("").length;
	return (totalLength / simpleText.length).toFixed(2);
}

//counts total number of words
function getWordCount(simpleText) {
	return simpleText.length;
}

function countUniqueWords(simpleText) {
	var uniqueWords = new Set(simpleText);
	return uniqueWords.size;
}

//takes user input string, removes all punctuation, and returns sorted list
function removePunctuation(text) {
	return text.toLowerCase().split(/{,!.":;-}+/).filter(Boolean).sort();
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

//getTextStatistics sets variables values to the working functions of the problem.
//var textReport then calls those variables into place in the results section of the page
function getTextStatistics(text) {
	var simpleText = removePunctuation(text);
	var totalWordCount = getWordCount(simpleText);
	var uniqueWordCount = countUniqueWords(simpleText)
	var avgWordLength = getAvgWordLength(simpleText);
	var avgSentenceLength = getWordsPerSentence(text);

	var textReport = $('.js-text-report')
	textReport.find(".js-word-count").text(totalWordCount);
	textReport.find(".js-unique-count").text(uniqueWordCount);
	textReport.find(".js-word-length").text(avgWordLength);
	textReport.find(".js-sentence-length").text(avgSentenceLength);
	textReport.removeClass("hidden");
}

//takes user input
function textSubmissionHandler() {
	$(".js-text-form").submit(function(event){
	event.preventDefault();
	var userInputText = $(this).find("#user-text").val();
	getTextStatistics(removeReturns(userInputText));
});
}
$(function()){
	textSubmissionHandler();
});