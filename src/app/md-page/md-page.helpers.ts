const mdAssetsPath = '../../assets/md';
const mdFileSuffix = '.content.md';

export const getMdPath = (pageName: string) => `${mdAssetsPath}/${pageName}${mdFileSuffix}`;
