import { getCategories, formatDate, getLatestUpdatedDate } from './index';

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

    const result = getCategories(mockInstalledSdks);

    expect(result).toEqual(['Backend', 'Utilities']);
  });

  test('receive array of IData objects and returns an array of strings with unique categories', async () => {
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

    const result = getCategories(mockInstalledSdks);

    expect(result).toEqual(['Backend', 'Utilities', 'Payments']);
  });
});

describe('formatDate function', () => {
  test('should return distance dates from first and last', () => {
    const firstSeenDate = '2018-04-08T02:33:42.000-07:00';
    const lastSeenDate = '2019-07-16T13:24:39.000-07:00';
    const result = formatDate(firstSeenDate, lastSeenDate);
    expect(result).toBe('over 1 year ago');
  });
});

describe('getLatestUpdatedDate function', () => {
  test('should return lastest date', () => {
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
        lastSeenDate: '2010-07-16T13:24:39.000-07:00',
        __typename: 'Sdk',
      },
    ];

    const result = getLatestUpdatedDate(mockInstalledSdks);

    expect(result).toEqual(new Date('2010-07-16T13:24:39.000-07:00'));
  });
});
