import { AxiosProxy } from '@/api/axios-proxy';
import { useNavigationStore } from './index';
import type { BottomNavItem } from './interfaces';
import type { IWorkHistory } from '@ktrentfrow/common';

export function setBottomNavigationItem(name: string): void {
  const state = useNavigationStore();
  if (name === state.bottomItemName) {
    setShowBottomNavigation(false);
    state.bottomItemName = '';
    state.bottomTextDisplay = '';
  } else {
    setShowBottomNavigation(true);
    state.bottomItemName = name;
    state.bottomTextDisplay = buildTextDisplayMarkdown(name);
  }
  //   state.bottomItemName = name;
}

export function setShowBottomNavigation(show: boolean): void {
  const state = useNavigationStore();
  state.showBottomNavigation = show;
}

export async function getWorkHistories(): Promise<void> {
  try {
    const state = useNavigationStore();
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/work-history`;
    // Add an api proxy and get all work histories
    const whs = await AxiosProxy.get<Array<IWorkHistory>>(url);
    console.log('WHS', whs.data);
    state.workHistories = whs.data;
  } catch (error) {
    console.error(error);
  }
}

function buildTextDisplayMarkdown(name: string): string {
  const state = useNavigationStore();
  const hist = state.workHistories.find((h) => h.companyName === name);
  let companyString = `#  **${hist?.companyName}**`;
  let titleString = `*${hist?.title}*`;
  titleString = titleString.concat('\n');
  let locString = `- ${hist?.city}, ${hist?.state}`;
  let dateString = `- ${getDate(hist?.startDate)} - ${getDate(hist?.endDate)}`;
  let overviewString = ``;
  overviewString = overviewString.concat(`${hist?.overview}`);
  let newString = '';
  newString = newString.concat('\n\n\n\n\n\n\n');
  let numDetails = hist && hist.details && hist?.details?.length > 0 ? hist?.details.length : 0;
  let detailsString = '';
  for (let i = 0; i < numDetails; i++) {
    detailsString = detailsString.concat(`- ${hist?.details[i] as string}`);
  }
  let numTechs =
    hist && hist.technologies && hist?.technologies?.length > 0 ? hist?.technologies.length : 0;
  let techString = '';
  for (let i = 0; i < numTechs; i++) {
    techString = techString.concat(`- ${hist?.technologies[i] as string}`);
    techString = techString.concat(`\n`);
  }
  return `
   ${companyString} 
   ${titleString} 
   ${locString} 
   ${dateString} 

   ${newString}

   ### **Overview**

   ${overviewString}

   ### **Details**
   ${detailsString}
  

   ### **Technologies**
   ${techString}
  
  
  `;
}

const getDate = (dt?: string | Date) => {
  if (dt) {
    return new Date(dt).toLocaleDateString();
  } else {
    return 'Present';
  }
};
