export function assertEqualDates(actual, expected, label) {
  const labelPart = label === undefined ? "" : `${label}: `;
  assert_equals(actual.constructor, Date, `${labelPart}must be a Date`);
  assert_equals(actual.valueOf(), expected.valueOf(), `${labelPart}timestamps must match`);
}

export function assertEqualArrayBuffers(actual, expected, label) {
  const labelPart = label === undefined ? "" : `${label}: `;
  assert_equals(actual.constructor, ArrayBuffer, `${labelPart}must be an ArrayBuffer`);
  assert_array_equals(new Uint8Array(actual), new Uint8Array(expected), `${labelPart}must match`);
}

export function assertABViewEqualsArrayBuffer(actual, expected, label) {
  assertEqualArrayBuffers(actual, expected.buffer, label);
}

export function assertArrayCustomEquals(actual, expected, equalityAsserter, label) {
  const labelPart = label === undefined ? "" : `${label}: `;
  assert_true(Array.isArray(actual), `${labelPart}must be an array`);
  assert_equals(actual.length, expected.length, `${labelPart}length must be as expected`);

  for (let i = 0; i < actual.length; ++i) {
    equalityAsserter(actual[i], expected[i], `${labelPart}index ${i}`);
  }
}
