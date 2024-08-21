export const selectTab = tabId => {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTab(...tabId) {
    const tabsToShow = {}
    tabId.forEach(id => tabsToShow[id] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}