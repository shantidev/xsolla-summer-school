import React from 'react';

export function highlightString(string, query) {
  if (string === null || query === null || query.length === 0) return string;

  const regEx = new RegExp(query, 'gi');
  const replacedText = string.toString().replace(regEx, getBold);
  return <span dangerouslySetInnerHTML={{ __html: replacedText }} />;

  function getBold(str) {
    return `<b>${str}</b>`;
  }
}
