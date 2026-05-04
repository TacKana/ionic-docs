/**
 * This file wraps the original MDXComponents so we don't need to modify the original code.
 *
 * Reason for modifying:
 * - Add a custom table component
 */

import MDXComponentsOriginal from '@theme-original/MDXComponents';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
// CUSTOM CODE
import MDXTable from './Table';
// CUSTOM CODE END
import type { MDXComponentsObject } from '@theme/MDXComponents';

function LegacyAnchor({ id }: { id: string }) {
  useBrokenLinks().collectAnchor(id);

  return <span aria-hidden="true" id={id} />;
}

const MDXComponents: MDXComponentsObject = {
  ...MDXComponentsOriginal,
  // CUSTOM CODE
  LegacyAnchor,
  table: MDXTable,
  // CUSTOM CODE END
};
export default MDXComponents;
