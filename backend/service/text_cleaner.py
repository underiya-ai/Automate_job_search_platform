
import re


class TextCleaner:

    @staticmethod
    def clean(text: str) -> str:
        """
        Clean extracted resume text while preserving important information.
        """

        if not text:
            return ""

        # Remove null characters
        text = text.replace("\x00", "")

        # Normalize line endings
        text = text.replace("\r\n", "\n").replace("\r", "\n")

        # Replace tabs with spaces
        text = text.replace("\t", " ")

        # Remove zero-width and invisible Unicode characters
        text = re.sub(r"[\u200B-\u200D\uFEFF]", "", text)

        # Remove multiple spaces
        text = re.sub(r"[ ]{2,}", " ", text)

        # Remove multiple blank lines
        text = re.sub(r"\n{3,}", "\n\n", text)

        # Remove trailing spaces
        text = "\n".join(line.strip() for line in text.splitlines())

        # Remove empty lines
        text = "\n".join(line for line in text.splitlines() if line)

        # Final cleanup
        text = text.strip()

        return text

