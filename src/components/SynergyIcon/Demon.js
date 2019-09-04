import React from 'react';
import { DEFAULT_SMALL, DEFAULT_BIG, PARTIAL, BRONZE, SILVER, GOLD } from '.';

function Demon({ synergy }) {
  switch (synergy) {
    case PARTIAL:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <g fill="none" fillRule="nonzero">
            <path
              fill="#000"
              stroke="#5D595C"
              strokeWidth="2"
              d="M20 1.16018296L4 10.57199861V29.4286321l16 9.4112043 16-9.4112043V10.57199861L20 1.16018296z"
            />
            <path
              fill="#5D595C"
              d="M11.75976331 28.2385678c-1.05878241-.5518381-1.78343-1.21728-2.17396449-1.9963457C9.19526432 25.4631565 9 24.3108059 9 22.7851357c0-.8926793.0607489-1.7447696.18224852-2.5562962.13885671-.8115267.34279944-1.5824655.61183432-2.3128395.26903488-.7303741.61183224-1.4201614 1.02840237-2.0693827.39921104-.6492214.87652582-1.2659724 1.43195266-1.8502716L14.1810651 12l-.6508876 1.7772346c-.1735709.5031465-.2950687 1.1969914-.364497 2.0815555-.0694284.8845641-.06075 1.7082513.0260355 2.4710864.1041425 1.0874458.2994068 1.9192481.5857988 2.4954321.286392.5761839.7854008 1.1807623 1.4970414 1.8137531 1.0240682.8926793 1.7226806 1.8340362 2.095858 2.8240987.3731774.9900626.342803 1.8096922-.0911243 2.4589136-.3818559.5842992-1.1542348.908905-2.3171597.9738271-1.162925.0649222-2.23036992-.1541867-3.20236689-.6573333zm11.24733729.1704198c-.7116406-.6816825-.8721913-1.606809-.4816568-2.7754074.3905345-1.1685985 1.2366799-2.2722582 2.5384615-3.3110124.4339272-.3570717.7984206-.8683258 1.0934911-1.5337777.2950706-.6654519.5076917-1.395815.6378699-2.1911111.1301781-.7952962.169231-1.6149258.1171597-2.4589136-.0520712-.8439877-.2082827-1.6149265-.468639-2.3128395l-.6508876-1.7772345 1.4319527 1.2903209c.590141.5193771 1.1195243 1.1117827 1.5881657 1.7772346.4686413.6654519.8678484 1.3795847 1.1976331 2.1424197.3297847.7628351.5814587 1.5662345.7550296 2.4102222C30.9218943 20.4966461 31 21.3487363 31 22.2251851c0 .8602183-.0564097 1.6960783-.1692308 2.5076049-.112821.8115267-.2473365 1.3633566-.4035503 1.6555062-.3124276.5356076-.8070972 1.006286-1.4840236 1.4120494-.6595694.4219939-1.3668602.734427-2.1218935.9373086-.7550334.2028817-1.4883594.2880907-2.2.2556297-.6942836-.0324611-1.2323453-.2272246-1.6142012-.5842963z"
            />
          </g>
        </svg>
      );

    case BRONZE:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <defs>
            <linearGradient
              id="demonBronze"
              x1="67.4023438%"
              x2="45.6640625%"
              y1="50%"
              y2="50%"
            >
              <stop offset="0%" stopColor="#61391C" />
              <stop offset="100%" stopColor="#8C644B" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="nonzero">
            <path
              fill="url(#demonBronze)"
              stroke="#000"
              strokeWidth="2"
              d="M-1.83981704 20l9.41181565 16H26.4286321l9.4112043-16-9.4112043-16H7.57199861l-9.41181565 16z"
              transform="rotate(90 18.5 21.5)"
            />
            <path
              fill="#000"
              d="M11.75976331 28.2385678c-1.05878241-.5518381-1.78343-1.21728-2.17396449-1.9963457C9.19526432 25.4631565 9 24.3108059 9 22.7851357c0-.8926793.0607489-1.7447696.18224852-2.5562962.13885671-.8115267.34279944-1.5824655.61183432-2.3128395.26903488-.7303741.61183224-1.4201614 1.02840237-2.0693827.39921104-.6492214.87652582-1.2659724 1.43195266-1.8502716L14.1810651 12l-.6508876 1.7772346c-.1735709.5031465-.2950687 1.1969914-.364497 2.0815555-.0694284.8845641-.06075 1.7082513.0260355 2.4710864.1041425 1.0874458.2994068 1.9192481.5857988 2.4954321.286392.5761839.7854008 1.1807623 1.4970414 1.8137531 1.0240682.8926793 1.7226806 1.8340362 2.095858 2.8240987.3731774.9900626.342803 1.8096922-.0911243 2.4589136-.3818559.5842992-1.1542348.908905-2.3171597.9738271-1.162925.0649222-2.23036992-.1541867-3.20236689-.6573333zm11.24733729.1704198c-.7116406-.6816825-.8721913-1.606809-.4816568-2.7754074.3905345-1.1685985 1.2366799-2.2722582 2.5384615-3.3110124.4339272-.3570717.7984206-.8683258 1.0934911-1.5337777.2950706-.6654519.5076917-1.395815.6378699-2.1911111.1301781-.7952962.169231-1.6149258.1171597-2.4589136-.0520712-.8439877-.2082827-1.6149265-.468639-2.3128395l-.6508876-1.7772345 1.4319527 1.2903209c.590141.5193771 1.1195243 1.1117827 1.5881657 1.7772346.4686413.6654519.8678484 1.3795847 1.1976331 2.1424197.3297847.7628351.5814587 1.5662345.7550296 2.4102222C30.9218943 20.4966461 31 21.3487363 31 22.2251851c0 .8602183-.0564097 1.6960783-.1692308 2.5076049-.112821.8115267-.2473365 1.3633566-.4035503 1.6555062-.3124276.5356076-.8070972 1.006286-1.4840236 1.4120494-.6595694.4219939-1.3668602.734427-2.1218935.9373086-.7550334.2028817-1.4883594.2880907-2.2.2556297-.6942836-.0324611-1.2323453-.2272246-1.6142012-.5842963z"
            />
          </g>
        </svg>
      );

    case SILVER:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <defs>
            <linearGradient
              id="demonSilver"
              x1="67.4023438%"
              x2="45.6640625%"
              y1="50%"
              y2="50%"
            >
              <stop offset="0%" stopColor="#646464" />
              <stop offset="100%" stopColor="#969696" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="nonzero">
            <path
              fill="url(#demonSilver)"
              stroke="#000"
              strokeWidth="2"
              d="M-1.83981704 20l9.41181565 16H26.4286321l9.4112043-16-9.4112043-16H7.57199861l-9.41181565 16z"
              transform="rotate(90 18.5 21.5)"
            />
            <path
              fill="#000"
              d="M11.75976331 28.2385678c-1.05878241-.5518381-1.78343-1.21728-2.17396449-1.9963457C9.19526432 25.4631565 9 24.3108059 9 22.7851357c0-.8926793.0607489-1.7447696.18224852-2.5562962.13885671-.8115267.34279944-1.5824655.61183432-2.3128395.26903488-.7303741.61183224-1.4201614 1.02840237-2.0693827.39921104-.6492214.87652582-1.2659724 1.43195266-1.8502716L14.1810651 12l-.6508876 1.7772346c-.1735709.5031465-.2950687 1.1969914-.364497 2.0815555-.0694284.8845641-.06075 1.7082513.0260355 2.4710864.1041425 1.0874458.2994068 1.9192481.5857988 2.4954321.286392.5761839.7854008 1.1807623 1.4970414 1.8137531 1.0240682.8926793 1.7226806 1.8340362 2.095858 2.8240987.3731774.9900626.342803 1.8096922-.0911243 2.4589136-.3818559.5842992-1.1542348.908905-2.3171597.9738271-1.162925.0649222-2.23036992-.1541867-3.20236689-.6573333zm11.24733729.1704198c-.7116406-.6816825-.8721913-1.606809-.4816568-2.7754074.3905345-1.1685985 1.2366799-2.2722582 2.5384615-3.3110124.4339272-.3570717.7984206-.8683258 1.0934911-1.5337777.2950706-.6654519.5076917-1.395815.6378699-2.1911111.1301781-.7952962.169231-1.6149258.1171597-2.4589136-.0520712-.8439877-.2082827-1.6149265-.468639-2.3128395l-.6508876-1.7772345 1.4319527 1.2903209c.590141.5193771 1.1195243 1.1117827 1.5881657 1.7772346.4686413.6654519.8678484 1.3795847 1.1976331 2.1424197.3297847.7628351.5814587 1.5662345.7550296 2.4102222C30.9218943 20.4966461 31 21.3487363 31 22.2251851c0 .8602183-.0564097 1.6960783-.1692308 2.5076049-.112821.8115267-.2473365 1.3633566-.4035503 1.6555062-.3124276.5356076-.8070972 1.006286-1.4840236 1.4120494-.6595694.4219939-1.3668602.734427-2.1218935.9373086-.7550334.2028817-1.4883594.2880907-2.2.2556297-.6942836-.0324611-1.2323453-.2272246-1.6142012-.5842963z"
            />
          </g>
        </svg>
      );

    case GOLD:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <defs>
            <linearGradient
              id="demonGold"
              x1="67.4023438%"
              x2="45.6640625%"
              y1="50%"
              y2="50%"
            >
              <stop offset="0%" stopColor="#9B7832" />
              <stop offset="100%" stopColor="#D0B25D" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="nonzero">
            <path
              fill="url(#demonGold)"
              stroke="#000"
              strokeWidth="2"
              d="M-1.83981704 20l9.41181565 16H26.4286321l9.4112043-16-9.4112043-16H7.57199861l-9.41181565 16z"
              transform="rotate(90 18.5 21.5)"
            />
            <path
              fill="#000"
              d="M11.75976331 28.2385678c-1.05878241-.5518381-1.78343-1.21728-2.17396449-1.9963457C9.19526432 25.4631565 9 24.3108059 9 22.7851357c0-.8926793.0607489-1.7447696.18224852-2.5562962.13885671-.8115267.34279944-1.5824655.61183432-2.3128395.26903488-.7303741.61183224-1.4201614 1.02840237-2.0693827.39921104-.6492214.87652582-1.2659724 1.43195266-1.8502716L14.1810651 12l-.6508876 1.7772346c-.1735709.5031465-.2950687 1.1969914-.364497 2.0815555-.0694284.8845641-.06075 1.7082513.0260355 2.4710864.1041425 1.0874458.2994068 1.9192481.5857988 2.4954321.286392.5761839.7854008 1.1807623 1.4970414 1.8137531 1.0240682.8926793 1.7226806 1.8340362 2.095858 2.8240987.3731774.9900626.342803 1.8096922-.0911243 2.4589136-.3818559.5842992-1.1542348.908905-2.3171597.9738271-1.162925.0649222-2.23036992-.1541867-3.20236689-.6573333zm11.24733729.1704198c-.7116406-.6816825-.8721913-1.606809-.4816568-2.7754074.3905345-1.1685985 1.2366799-2.2722582 2.5384615-3.3110124.4339272-.3570717.7984206-.8683258 1.0934911-1.5337777.2950706-.6654519.5076917-1.395815.6378699-2.1911111.1301781-.7952962.169231-1.6149258.1171597-2.4589136-.0520712-.8439877-.2082827-1.6149265-.468639-2.3128395l-.6508876-1.7772345 1.4319527 1.2903209c.590141.5193771 1.1195243 1.1117827 1.5881657 1.7772346.4686413.6654519.8678484 1.3795847 1.1976331 2.1424197.3297847.7628351.5814587 1.5662345.7550296 2.4102222C30.9218943 20.4966461 31 21.3487363 31 22.2251851c0 .8602183-.0564097 1.6960783-.1692308 2.5076049-.112821.8115267-.2473365 1.3633566-.4035503 1.6555062-.3124276.5356076-.8070972 1.006286-1.4840236 1.4120494-.6595694.4219939-1.3668602.734427-2.1218935.9373086-.7550334.2028817-1.4883594.2880907-2.2.2556297-.6942836-.0324611-1.2323453-.2272246-1.6142012-.5842963z"
            />
          </g>
        </svg>
      );

    case DEFAULT_BIG:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32">
          <g fill="none" fillRule="nonzero">
            <path
              fill="#5D595C"
              stroke="#5D595C"
              strokeWidth="1.6"
              d="M14 .92814637L1.2 8.45759889V23.5429057L14 31.0718691l12.8-7.5289634V8.45759889L14 .92814637z"
            />
            <path
              fill="#FFF"
              d="M7.40781065 22.5908542c-.84702593-.4414705-1.426744-.973824-1.7391716-1.5970765C5.35621146 20.3705252 5.2 19.4486447 5.2 18.2281086c0-.7141435.04859912-1.3958157.14579882-2.045037.11108536-.6492214.27423955-1.2659724.48946745-1.8502716.2152279-.5842992.48946579-1.1361291.8227219-1.6555062.31936883-.5193771.70122065-1.0127779 1.14556213-1.4802173L9.34485207 9.6l-.52071006 1.4217876c-.13885671.4025173-.23605495.9575932-.29159763 1.6652445-.05554269.7076513-.04859995 1.366601.0208284 1.9768691.08331403.8699566.23952548 1.5353985.46863905 1.9963457.22911358.4609471.62832063.9446098 1.19763314 1.4510024.81925463.7141435 1.37814443 1.467229 1.67668643 2.259279.2985419.7920501.2742423 1.4477538-.0728994 1.9671309-.3054848.4674394-.9233879.727124-1.85372786.7790617-.93033996.0519377-1.78429591-.1233494-2.56189349-.5258667zm8.99786985.1363358c-.5693125-.5453459-.6977531-1.2854471-.3853255-2.2203259.3124276-.9348787.9893439-1.8178065 2.0307693-2.6488098.3471417-.2856574.6387365-.6946607.8747929-1.2270222.2360564-.5323615.4061533-1.116652.5102958-1.7528889.1041426-.6362369.1353848-1.2919407.0937278-1.9671309-.041657-.6751902-.1666261-1.2919412-.3749112-1.8502716l-.5207101-1.42178761 1.1455622 1.03225681c.4721128.4155016.8956194.8894261 1.2705325 1.4217876.3749131.5323615.6942788 1.1036677.9581065 1.7139358.2638278.6102681.465167 1.2529876.6040237 1.9281778.124971.6622058.1874556 1.3438779.1874556 2.045037 0 .6881746-.0451278 1.3568626-.1353846 2.0060839-.0902569.6492214-.1978692 1.0906853-.3228403 1.324405-.249942.4284861-.6456777.8050288-1.1872189 1.1296395-.5276555.3375951-1.0934881.5875415-1.6975148.7498469-.6040267.1623053-1.1906875.2304725-1.76.2045037-.5554268-.0259689-.9858762-.1817797-1.2913609-.4674371z"
            />
          </g>
        </svg>
      );

    case DEFAULT_SMALL:
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <g fill="none" fillRule="nonzero">
            <path
              fill="#5D595C"
              stroke="#5D595C"
              d="M10 .58009148L2 5.28599931V14.714316l8 4.7056022 8-4.7056022V5.28599931L10 .58009148z"
            />
            <path
              fill="#FFF"
              d="M5.87988166 14.1192839c-.52939121-.2759191-.891715-.60864-1.08698225-.9981728C4.59763216 12.7315783 4.5 12.155403 4.5 11.3925679c0-.4463397.03037445-.8723848.09112426-1.2781482.06942836-.40576331.17139972-.79123271.30591716-1.15641972.13451744-.36518701.30591612-.71008067.51420118-1.03469135.19960553-.32461067.43826291-.63298619.71597633-.9251358L7.09053254 6l-.32544378.88861728c-.08678545.25157327-.14753435.59849573-.18224852 1.04077777-.03471418.44228204-.03037497.85412566.01301775 1.2355432.05207126.54372288.14970342.95962405.29289941 1.24771605.14319598.288092.39270039.5903811.74852071.9068765.51203411.4463397.86134029.9170181 1.04792899 1.4120494.1865887.4950313.17140148.9048461-.04556213 1.2294568-.19092798.2921496-.57711741.4544525-1.15857988.4869136-.58146247.032461-1.11518495-.0770934-1.60118343-.3286667zm5.62366864.0852099c-.35582032-.3408412-.43609566-.8034045-.24082841-1.3877037.19526725-.5842992.61833991-1.1361291 1.26923081-1.6555062.2169636-.1785359.3992103-.4341629.5467455-.7668889.1475353-.3327259.2538459-.69790744.3189349-1.09555551.0650891-.39764808.0846156-.80746291.0585799-1.22945679-.0260356-.42199387-.1041413-.80746327-.2343195-1.15641974l-.3254438-.88861728.7159763.64516049c.2950705.25968854.5597622.55589134.7940829.88861728.2343207.33272594.4339242.68979233.5988165 1.07120987.1648924.38141754.2907294.78311722.3775148 1.2051111.0781069.41387858.1171598.83992378.1171598 1.27814818 0 .4301091-.0282048.8480391-.0846154 1.2538024-.0564105.4057634-.1236682.6816783-.2017751.8277531-.1562138.2678038-.4035486.503143-.7420119.7060247-.3297847.2109969-.68343.3672135-1.0609467.4686543-.3775167.1014408-.7441797.1440454-1.1.1278148-.3471418-.0162305-.6161726-.1136122-.8071006-.2921481z"
            />
          </g>
        </svg>
      );
  }
}

export default Demon;
