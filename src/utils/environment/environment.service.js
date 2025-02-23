/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * Service handling environment-related functionality.
 */

// App dependencies
import { EnvironmentUrl } from "./environment-url.model";

// Template variables
const GATSBY_ENV = process.env.GATSBY_ENV;

/**
 * Returns the ANVIL-DEV environment url.
 */
export function getAnVILDevEnvironmentUrl() {
  return EnvironmentUrl["ANVIL-DEV"];
}

/**
 * Returns the name of the current environment.
 */
export function getCurrentEnvironment() {
  return GATSBY_ENV.toUpperCase();
}

/**
 * Returns the current environment's url.
 */
export function getCurrentEnvironmentURL() {
  const currentEnvironment = getCurrentEnvironment();

  return EnvironmentUrl[currentEnvironment];
}

/**
 * Returns the datasets current environment url.
 * @returns the datasets environment url.
 */
export function getDatasetsEnvironmentUrl() {
  let currentEnvironment = getCurrentEnvironment();
  if (currentEnvironment === "LOCAL") {
    currentEnvironment = "ANVIL-PORTAL-CC-DEV";
  }
  return EnvironmentUrl[currentEnvironment];
}

/**
 * Returns true if the current environment is local.
 */
export function isLocal() {
  return getCurrentEnvironment() === "LOCAL";
}

/**
 * Returns true if the current environment is production.
 */
export function isProd() {
  return getCurrentEnvironment() === "PROD";
}

/**
 * Returns true if the current environment is staging.
 */
export function isStaging() {
  return getCurrentEnvironment() === "STAGING";
}
