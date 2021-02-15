const refreshToken = () => {
  let currUser = JSON.parse(localStorage.getItem("my_app_user"));
  let getUserFormData = new FormData();
  getUserFormData.append("grant_type", "refresh_token");
  getUserFormData.append("refresh_token", currUser.refresh_token);
  return new Promise((resolve, reject) => {
    my_app
    .post(`${URL}/token/url/`, getUserFormData, {
      headers: {
        Authorization: "Bearer" + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDE2OWUzNGMxN2Y2NTEzNjRkZWQwMmI2OGZmMmM4OWNkMGMxZTNjMGQzZjA5NTY5MTA1NmIyMTAyZDFkZTVjMTFlMjdmYjlkY2QyZjgyZmQiLCJpYXQiOjE2MTA5NjE5ODUsIm5iZiI6MTYxMDk2MTk4NSwiZXhwIjoxNjQyNDk3OTg1LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.rPIqORu7Pg0jT1wfIi-mxjuGAVRAyM37l8IxpzOMAI3MjtkXq4XtHVfA1zLvGSkmRZm5XirCyVCKz8IjuinL0o52WHm3zVv70SXLFHhx9N4B9abd2B3U2k4R3HscttvZrQf9GjZ0eSWJvifoCcQ4nZ_x-IiF832ywN69FoG-ricJLOH9CMd9v1GlEtHdfsxSSYl5XSmHzWWSnC4WTYH_-6UvhiNs2XFJp_OQXlrDzddYEwqib8_5q139F7Sp0zSBYyZ5EO7c4t5lO0fyTOs-O2VCNs_UdV5hb0JwtmnVzgphP8vSVtRUgu52zKO-Lt0aUUzx6o7mb7xc9969dzO4tzsQh1NY4Uu6hFTp8837-LKsdzBSzvSCby-DnYyQCKzyFDP7Oaxl9pdX3dbylspKJnmKWYWoZRvXAiUG-N5dLQm0K-_23PMU33sJ20L9EHKLJBTNOphlOTpkA4PwjTKuVJ1Qyt_qgvB34wGbfjQZPtL3UG_uRpIJrHuBqr-3-8bwqhoZcCMdy5fwxtiyn4CGDFGcr-ebcVj6F1fmx268BVN9WZUDtuD8dLDTmmiow0YAf5R_QFxHb1ADrVzipUZjxeZ6X-abCQy5i50uz_Pu7iFzy8jrYJ6io24TEz3VsgnB32G5ELXGHpDJsmhDNvJGvsAL6MIqOhh1EJYz_jJ3ABw'
      }
    })
    .then(async response => {
      resolve(response);
    })
    .catch(error => {
      reject(error);
    });
  });
};
