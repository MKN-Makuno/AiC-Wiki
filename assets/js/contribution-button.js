function switchContributionPage() {
    if(location.pathname == '/contribution_v2/') {
        location.assign(`/`);
    } else {
        location.assign(`../../contribution_v2`);
    }
}
