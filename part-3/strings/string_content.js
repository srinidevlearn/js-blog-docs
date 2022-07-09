const camel2title = (camelCase) =>
  camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim();

const stringInBuiltMethods = {
  stringSearchWithBoolean: {
    startsWith: {
      syntax: `String.startsWith(searchValue, start)`,
      content: `The <pre class="dynamicContent">startsWith()</pre> method returns true if a string starts with a specified string else return false`,
    },

    endsWith: {
      syntax: `String.endsWith(searchString,length)`,
      content: `The <pre class="dynamicContent">endsWith()</pre> method returns true if a string ends with a specified string else return false`,
    },
    includes: {
      syntax: `String.includes(searchvalue, start)`,
      content: `The <pre class="dynamicContent">includes()</pre> method returns true if a string contains a specified string else return false`,
    },
  },
  stringSearchWithIndex: {
    indexOf: {
      syntax: `String.indexOf(searchvalue, start)`,
      content: `The <pre class="dynamicContent">indexOf()</pre> method returns the position of the first occurrence of a value in a string else return -1. <br><mark>Note : </mark> It is case sensitive`,
    },
    lastIndexOf: {
      syntax: `String.lastIndexOf(searchvalue, start)`,
      content: `The <pre class="dynamicContent">lastIndexOf()</pre> method returns the position of the last occurrence of a value in a string else return -1. <br><mark>Note : </mark> It is case sensitive`,
    },
  },

  subStringHelpers: {
    substr: {
      syntax: `String.substr(start, length)`,
      content: `The <pre class="dynamicContent">substr()</pre> method extracts a part of a string and also this method begins at a specified position, and returns a specified number of characters but does not change the original string. To extract characters from the end of the string, we can use negative numbers such as -1 for instance`,
    },
    substring: {
      syntax: `String.substring(start, end)`,
      content: `The <pre class="dynamicContent">substring()</pre> method extracts characters, between two indices (positions), from a string, and returns the substring.If start is greater than end, arguments are swapped. If value less than 0 such as -1 or -4 for instance was menttioned, they are treated as 0`,
    },
    slice: {
      syntax: `String.slice(start, end)`,
      content: `The <pre class="dynamicContent">slice()</pre> method extracts a part of a string.A negative number selects from the end of the string`,
    },
  },
  stringReplacer: {
    replace: {
      syntax: `String.replace(searchValue, newValue)`,
      content: `The <pre class="dynamicContent">replace()</pre> method replaces the original strings with replaced value`,
    },
    replaceAll: {
      syntax: `String.replaceAll(pattern, replacement)`,
      content: `The <pre class="dynamicContent">replaceAll()</pre> method to replace all occurrences of a substring with a new one in a string`,
    },
  },
  stringTrimmer: {
    trim: {
      syntax: `String.trim()`,
      content: `The <pre class="dynamicContent">trim()</pre> method removes whitespace from both sides of a string.`,
    },
    trimStart: {
      syntax: `String.trimStart()`,
      content: `The <pre class="dynamicContent">trimStart()</pre> method removes whitespace from starting sides of a string.`,
    },
    trimEnd: {
      syntax: `String.trimEnd()`,
      content: `The <pre class="dynamicContent">trimEnd()</pre> method removes whitespace from ending sides of a string.`,
    },
  },
  stringPadding: {
    padStart: {
      syntax: `String.padStart(padLength, padString)`,
      content: `The <pre class="dynamicContent">padStart()</pre> method pads a string with another string to a certain length from the start of the string and returns a resulting string that reaches a certain length.`,
    },
    padEnd: {
        syntax: `String.padEnd(padLength,padString)`,
      content: `The <pre class="dynamicContent">padEnd()</pre> method pads a string with another string to a certain length from the end of the string and returns a resulting string that reaches a certain length.`,
    },
  },
};

window.addEventListener("DOMContentLoaded", () => {
  let targetEl = document.querySelector('[data-id="dynamicStrContent"]');
  let el = "";
  for (let strGroups in stringInBuiltMethods) {
    el += `<div class="card mb-2">`;
    el += `<div class="card-header">${camel2title(strGroups)}</div>`;
    for (let item in stringInBuiltMethods[strGroups]) {
      el += `<div class="card-body text-center">
      <code class="d-inline-block text-danger bg-danger bg-opacity-25 px-1"">
      ${stringInBuiltMethods[strGroups][item]["syntax"]}
      </code>
      </div>`;
      el += `<div class="card-body text-left">${stringInBuiltMethods[strGroups][item]["content"]}</div>`;
      el += '<hr>';
    }
    el += "</div>";
  }
  targetEl.innerHTML = "";
  targetEl.innerHTML = el;
});
