//this is our action creator where we attached selectLibrary to this.props in ListItem
export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};

