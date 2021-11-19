import { getCategories } from './index';

describe('getCategories', () => {
  test('receive empty array and returns an empty array', async () => {
    // Arrange
    const mockInstalledSdks = [];

    // Act
    const result = getCategories(mockInstalledSdks);

    // Assert
    expect(result).toEqual([]);
  });

  test('receive array of IData objects and returns an array of strings with only the categories', async () => {
    // Arrange
    const mockInstalledSdks = [
      {
        id: '1',
        name: 'SDK 1',
        categories: ['Backend'],
        firstSeenDate: '2017-11-16T10:48:53.000-08:00',
        lastSeenDate: '2019-07-16T13:24:39.000-07:00',
        __typename: 'Sdk',
      },
      {
        id: '2',
        name: 'SDK 2',
        categories: ['Utilities'],
        firstSeenDate: '2015-09-16T15:09:16.000-07:00',
        lastSeenDate: '2019-07-16T13:24:39.000-07:00',
        __typename: 'Sdk',
      },
    ];

    // Act
    const result = getCategories(mockInstalledSdks);

    // Assert
    expect(result).toEqual(['Backend', 'Utilities']);
  });

  test('receive array of IData objects and returns an array of strings with unique categories', async () => {
    // Arrange
    const mockInstalledSdks = [
      {
        id: '1',
        name: 'SDK 1',
        categories: ['Backend', 'Backend'],
        firstSeenDate: '2017-11-16T10:48:53.000-08:00',
        lastSeenDate: '2019-07-16T13:24:39.000-07:00',
        __typename: 'Sdk',
      },
      {
        id: '2',
        name: 'SDK 2',
        categories: ['Utilities', 'Backend', 'Payments'],
        firstSeenDate: '2015-09-16T15:09:16.000-07:00',
        lastSeenDate: '2019-07-16T13:24:39.000-07:00',
        __typename: 'Sdk',
      },
    ];

    // Act
    const result = getCategories(mockInstalledSdks);

    // Assert
    expect(result).toEqual(['Backend', 'Utilities', 'Payments']);
  });
});
