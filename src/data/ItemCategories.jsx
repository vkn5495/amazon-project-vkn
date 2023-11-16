import { smartWatchs } from "./Data";
import { OnePlus } from "./mobile/OnePlus/OnePlus";
import { IQoo } from "./mobile/iQoo/IQoo";
import { Vivo } from "./mobile/vivo/Vivo";

export const Mobile = OnePlus.concat(IQoo,Vivo)

export const AllItemsStore = Mobile.concat(smartWatchs)