export const handleNotepad = textarea => {
	const textToSave = textarea.value;
	const blob = new Blob([textToSave], { type: "text/plain" });
	const url = URL.createObjectURL(blob);

	const a = document.createElement("a");
	a.href = url;
	a.download = "mynote.txt";
	a.click();
	URL.revokeObjectURL(url);
};
