//splits array by end punctuation the divides total word count by number 
//of sentences to get average words per sentence returns number to two decimal points
function getWordsPerSentence(text) {
	var numOfSentences = text.split(/[!.?]+/).filter(Boolean).length;;
	var wordCount = tokenize(text).length;
	return (wordCount / numOfSentences).toFixed(2);
}
//gets average length of each word to two decimal points
function getAvgWordLength(tokens) {
	var totalLength = tokens.join("").length;
	return (totalLength / tokens.length).toFixed(2);
}

//counts total number of words
function getWordCount(tokens) {
	return tokens.length;
}

function countUniqueWords(tokens) {
	var uniqueWords = new Set(tokens);
	return uniqueWords.size;
}

//takes user input string, removes all punctuation, and returns sorted list
function tokenize(text) {
	return text.toLowerCase().split(/[,!.":;-]+/).filter(Boolean).sort();
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

//getTextStatistics sets variables values to the working functions of the problem.
//var textReport then calls those variables into place in the results section of the page
function getTextStatistics(text) {
	var tokens = tokenize(text);
	var totalWordCount = getWordCount(tokens);
	var uniqueWordCount = countUniqueWords(tokens);
	var avgWordLength = getAvgWordLength(tokens);
	var avgSentenceLength = getWordsPerSentence(text);

	var textReport = $('.js-text-report');
	textReport.find('.js-word-count').text(totalWordCount);
	textReport.find('.js-unique-count').text(uniqueWordCount);
	textReport.find('.js-word-length').text(avgWordLength + ' characters');
	textReport.find('.js-sentence-length').text(avgSentenceLength + ' words');
	textReport.removeClass('hidden');
}

//takes user input
function textSubmissionHandler() {
	$('.js-text-form').submit(function(event) {
		event.preventDefault();
		var userText = $(this).find('#user-text').val();
		getTextStatistics(removeReturns(userText));
	});
}
$(function() {
	textSubmissionHandler();
});