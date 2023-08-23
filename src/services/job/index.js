import { instance } from "../axios";
import { getFeaturedJobPath, getLatestJobsPath } from "../path";
export const getFeaturedJobService = () =>
  instance({
    url: getFeaturedJobPath,
    method: "GET",
  })
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.err(err));

export const getLatestJobService = () =>
  instance({
    url: getLatestJobsPath,
    method: "GET",
  })
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
