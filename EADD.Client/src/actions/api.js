export const API_ROOT = (() => {
    if (window.location.href.toLowerCase().indexOf('appgate') > -1 || window.location.href.toLowerCase().indexOf('home.srs') > -1) {
        const index = window.location.href.toLowerCase().indexOf('ui/wms_pmr');
        return window.location.href.substring(0, index) + 'api/wms_pmr/';
    }

    return 'http://localhost:53844/api/wms_pmr/';
})();


export const API_INSPECTION = `${API_ROOT}inspections/`;
export const API_INSTALLATION = `${API_ROOT}installations/`;
