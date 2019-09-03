import React from 'react';
import { DEFAULT_SMALL, PARTIAL, GOLD } from '.';

function Dragon({ synergy }) {
  switch (synergy) {
    case PARTIAL:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <g fill="none" fill-rule="nonzero">
            <path
              fill="#000"
              stroke="#5D595C"
              stroke-width="2"
              d="M20 1.16018296L4 10.57199861V29.4286321l16 9.4112043 16-9.4112043V10.57199861L20 1.16018296z"
            />
            <path
              fill="#5D595C"
              d="M15.7859532 28.235923c-1.2129381-.5642167-1.9531759-1.1027792-2.2207358-1.6157035-.2675599-.5129243.0445886-.7693826.9364548-.7693826.3389092 0 .6287614-.055566.8695653-.1666996.2408038-.1111336.361204-.2436371.361204-.3975144 0-.1709747.0891853-.3120268.2675585-.4231604.1783732-.1111336.3924179-.1666996.6421405-.1666996.2318852 0 .4370113-.0555659.6153846-.1666995.1783732-.1111336.2675585-.2436371.2675585-.3975144s.1204001-.2863807.361204-.3975143c.2408039-.1111337.5306561-.1666996.8695652-.1666996.3389092 0 .5930873-.0512917.7625418-.1538765.1694546-.1025849.209588-.2308141.1204014-.3846914-.0891866-.1367798-.0936459-.2778318-.0133779-.4231604.0802679-.1453286.2185051-.2521862.4147157-.3205761.2140479-.0683899.2318849-.1581503.0535117-.2692839-.1783733-.1111336-.4905218-.200894-.9364549-.2692839-.4459331-.0854874-.8294298-.1068589-1.1505016-.0641153-.3210719.0427437-.4816054.1325042-.4816054.269284 0 .1538773-.0579704.247912-.173913.2821069-.1159426.034195-.2630984 5e-7-.4414716-.1025843-.3389092-.2051697-.8160504-.0427461-1.4314381.4872756-.6153877.5300218-.923077 1.0429385-.923077 1.5387653 0 .1880722-.0891852.3163014-.2675585.3846913-.1783732.0683899-.3924179.0512927-.6421405-.0512922-.3032345-.1025848-.5261977-.0897619-.66889627.0384692-.1426986.128231-.21404682.380415-.21404682.7565595 0 .8377764-.20512616 1.2010924-.61538462 1.0899588-.41025846-.1111336-.72240803-.619776-.93645485-1.5259422-.10702395-.427437-.2497204-.8591418-.42809364-1.2951275-.17837325-.4359856-.33890676-.7394613-.48160536-.9104361-.14269859-.1709747-.35228401-.5556622-.62876254-1.1540739s-.53957511-1.2310089-.78929766-1.8978105L8 17.1311671l2.3812709.3077531c.98105285.1196823 1.83277231.0854879 2.55518395-.1025844.72241165-.1880722 1.75250165-.6496972 3.09030105-1.3848887.8918662-.4958268 1.6588596-.9830976 2.3010033-1.461827.6421437-.4787294.9632107-.7950279.9632107-.9489052.0178373-.3248521.4236304-.8676889 1.2173913-1.6285266.7937609-.7608377 1.5562951-1.3464175 2.2876254-1.756757.3032345-.17097476.4860644-.20089489.548495-.0897613.0624306.1111336.0133787.3975121-.1471572.8591439-.2318852.7009966-.2051296 1.0771355.0802676 1.1284279.2853972.0512924.9453683-.2051659 1.9799331-.7693826 1.2842873-.7009966 2.0914142-.9702778 2.4214047-.8078518.3299905.162426.0579754.679617-.8160535 1.5515883-.9810529.9916537-1.4804905 1.6413481-1.4983278 1.9491027-.0178373.3077545.4459261.4616295 1.3913043.4616295.8740289 0 1.3467109.1196806 1.4180602.3590453.0713493.2393646-.2318806.7180868-.909699 1.4361809-.4459331.4616318-.6688963.7522846-.6688963.8719669 0 .1196824.2051262.1795226.6153846.1795226.2675599 0 .6778122.1496007 1.2307693.4488066.552957.2992058 1.0969873.6625218 1.632107 1.0899587L32 20.3882202l-1.9264214.4616296c-.767005.1880723-1.2530648.3846903-1.458194.58986-.2051292.2051697-.218507.4958225-.0401338.871967.1248613.2564622.2586392.6411496.4013378 1.1540739.1426979.5129243.249721.9916465.3210703 1.4361809l.2943143 1.6157035-2.5150501-1.2310122c-1.5875219-.7864839-3.0144864-1.0172964-4.2809365-.6924443-1.26645.324852-2.2296511 1.1626159-2.8896321 2.5133166-.552957 1.111336-1.0568539 1.7311102-1.5117057 1.8593413-.4548517.1282311-1.3244083-.1154043-2.6086956-.7309135z"
            />
          </g>
        </svg>
      );

    case GOLD:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <defs>
            <linearGradient id="a" x1="67.4023438%" x2="45.6640625%" y1="50%" y2="50%">
              <stop offset="0%" stop-color="#9B7832" />
              <stop offset="100%" stop-color="#D0B25D" />
            </linearGradient>
          </defs>
          <g fill="none" fill-rule="nonzero">
            <path
              fill="url(#a)"
              stroke="#000"
              stroke-width="2"
              d="M-1.83981704 20l9.41181565 16H26.4286321l9.4112043-16-9.4112043-16H7.57199861l-9.41181565 16z"
              transform="rotate(90 18.5 21.5)"
            />
            <path
              fill="#000"
              d="M15.7859532 28.235923c-1.2129381-.5642167-1.9531759-1.1027792-2.2207358-1.6157035-.2675599-.5129243.0445886-.7693826.9364548-.7693826.3389092 0 .6287614-.055566.8695653-.1666996.2408038-.1111336.361204-.2436371.361204-.3975144 0-.1709747.0891853-.3120268.2675585-.4231604.1783732-.1111336.3924179-.1666996.6421405-.1666996.2318852 0 .4370113-.0555659.6153846-.1666995.1783732-.1111336.2675585-.2436371.2675585-.3975144s.1204001-.2863807.361204-.3975143c.2408039-.1111337.5306561-.1666996.8695652-.1666996.3389092 0 .5930873-.0512917.7625418-.1538765.1694546-.1025849.209588-.2308141.1204014-.3846914-.0891866-.1367798-.0936459-.2778318-.0133779-.4231604.0802679-.1453286.2185051-.2521862.4147157-.3205761.2140479-.0683899.2318849-.1581503.0535117-.2692839-.1783733-.1111336-.4905218-.200894-.9364549-.2692839-.4459331-.0854874-.8294298-.1068589-1.1505016-.0641153-.3210719.0427437-.4816054.1325042-.4816054.269284 0 .1538773-.0579704.247912-.173913.2821069-.1159426.034195-.2630984 5e-7-.4414716-.1025843-.3389092-.2051697-.8160504-.0427461-1.4314381.4872756-.6153877.5300218-.923077 1.0429385-.923077 1.5387653 0 .1880722-.0891852.3163014-.2675585.3846913-.1783732.0683899-.3924179.0512927-.6421405-.0512922-.3032345-.1025848-.5261977-.0897619-.66889627.0384692-.1426986.128231-.21404682.380415-.21404682.7565595 0 .8377764-.20512616 1.2010924-.61538462 1.0899588-.41025846-.1111336-.72240803-.619776-.93645485-1.5259422-.10702395-.427437-.2497204-.8591418-.42809364-1.2951275-.17837325-.4359856-.33890676-.7394613-.48160536-.9104361-.14269859-.1709747-.35228401-.5556622-.62876254-1.1540739s-.53957511-1.2310089-.78929766-1.8978105L8 17.1311671l2.3812709.3077531c.98105285.1196823 1.83277231.0854879 2.55518395-.1025844.72241165-.1880722 1.75250165-.6496972 3.09030105-1.3848887.8918662-.4958268 1.6588596-.9830976 2.3010033-1.461827.6421437-.4787294.9632107-.7950279.9632107-.9489052.0178373-.3248521.4236304-.8676889 1.2173913-1.6285266.7937609-.7608377 1.5562951-1.3464175 2.2876254-1.756757.3032345-.17097476.4860644-.20089489.548495-.0897613.0624306.1111336.0133787.3975121-.1471572.8591439-.2318852.7009966-.2051296 1.0771355.0802676 1.1284279.2853972.0512924.9453683-.2051659 1.9799331-.7693826 1.2842873-.7009966 2.0914142-.9702778 2.4214047-.8078518.3299905.162426.0579754.679617-.8160535 1.5515883-.9810529.9916537-1.4804905 1.6413481-1.4983278 1.9491027-.0178373.3077545.4459261.4616295 1.3913043.4616295.8740289 0 1.3467109.1196806 1.4180602.3590453.0713493.2393646-.2318806.7180868-.909699 1.4361809-.4459331.4616318-.6688963.7522846-.6688963.8719669 0 .1196824.2051262.1795226.6153846.1795226.2675599 0 .6778122.1496007 1.2307693.4488066.552957.2992058 1.0969873.6625218 1.632107 1.0899587L32 20.3882202l-1.9264214.4616296c-.767005.1880723-1.2530648.3846903-1.458194.58986-.2051292.2051697-.218507.4958225-.0401338.871967.1248613.2564622.2586392.6411496.4013378 1.1540739.1426979.5129243.249721.9916465.3210703 1.4361809l.2943143 1.6157035-2.5150501-1.2310122c-1.5875219-.7864839-3.0144864-1.0172964-4.2809365-.6924443-1.26645.324852-2.2296511 1.1626159-2.8896321 2.5133166-.552957 1.111336-1.0568539 1.7311102-1.5117057 1.8593413-.4548517.1282311-1.3244083-.1154043-2.6086956-.7309135z"
            />
          </g>
        </svg>
      );

    case DEFAULT_SMALL:
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <g fill="none" fill-rule="nonzero">
            <path
              fill="#5D595C"
              stroke="#5D595C"
              d="M10 .58009148L2 5.28599931V14.714316l8 4.7056022 8-4.7056022V5.28599931L10 .58009148z"
            />
            <path
              fill="#FFF"
              d="M7.89297659 14.5978542c-.60646903-.2969562-.97658796-.5804101-1.11036789-.8503703-.13377994-.2699601.02229431-.4049382.46822742-.4049382.16945458 0 .31438067-.0292452.43478261-.0877366.12040194-.0584914.18060201-.12823.18060201-.2092181 0-.0899867.04459264-.1642246.13377926-.222716.08918662-.0584914.19620896-.0877366.32107023-.0877366.11594261 0 .21850569-.0292453.30769231-.0877366.08918662-.0584914.13377927-.1282301.13377927-.2092181 0-.0809881.06020006-.1507267.180602-.2092181.12040194-.0584914.26532803-.0877366.43478261-.0877366.16945458 0 .29654361-.0269956.3812709-.0809877.0847273-.053992.10479398-.121481.06020067-.2024691-.04459331-.0719893-.04682294-.1462273-.00668896-.222716.04013398-.0764887.10925258-.1327296.20735786-.1687242.10702395-.0359947.11594247-.0832371.02675585-.1417284-.08918662-.0584914-.24526087-.1057337-.46822742-.1417284-.22296656-.0449934-.41471492-.0562415-.57525084-.0337449-.16053592.0224967-.24080267.069739-.24080267.1417284 0 .0809881-.02898522.13048-.08695653.1484774-.0579713.0179973-.13154916 2e-7-.22073578-.0539918-.16945458-.1079841-.40802522-.022498-.71571907.2564609-.30769384.2789588-.46153846.5489149-.46153846.8098764 0 .0989854-.04459264.1664745-.13377926.2024691-.08918662.0359947-.19620896.0269962-.32107024-.0269958-.15161725-.0539921-.26309886-.0472432-.33444816.0202469-.07134929.06749-.10702341.2002184-.10702341.3981892 0 .440935-.10256307.6321539-.3076923.5736625-.20512924-.0584914-.36120402-.3261978-.46822743-.8031275-.05351197-.2249668-.1248602-.4521798-.21404682-.681646-.08918662-.2294661-.16945338-.3891902-.24080268-.4791769-.0713493-.0899867-.176142-.2924538-.31438127-.6074073-.13823926-.3149535-.26978756-.6478994-.39464883-.9988476L4 8.75324585l1.19063545.16197529c.49052642.06299071.91638616.04499363 1.27759197-.05399176.36120582-.0989854.87625084-.3419459 1.54515051-.72888881.44593311-.26096149.82942983-.5174198 1.15050167-.76938262.32107184-.25196282.48160535-.41843576.48160535-.49942381.00891866-.17097477.21181518-.45667833.60869565-.85711924.39688047-.40044091.77814756-.70864081 1.14381271-.92460894.15161729-.08998673.24303219-.10573417.27424749-.0472428.0312153.05849137.0066894.20921687-.0735786.45218102-.1159426.36894556-.10256481.56691338.0401338.59390939.1426986.02699602.4726841-.10798204.9899665-.40493822.6421437-.36894556 1.0457071-.51067252 1.2107024-.42518513.1649952.08548738.0289877.35769313-.4080268.81662541-.4905264.52192299-.7402452.8638674-.7491639 1.0258435-.0089186.1619761.2229631.24296294.6956522.24296294.4370145 0 .6733555.06298976.7090301.18897117.0356747.12598141-.1159403.37794045-.4548495.75588468-.2229665.24296415-.3344481.39593929-.3344481.45892999 0 .06299071.102563.09448559.3076923.09448559.1337799 0 .3389061.0787372.6153846.23621396.2764785.15747676.5484936.34869568.8160535.57366248L16 10.4674843l-.9632107.242963c-.3835025.0989854-.6265324.2024685-.729097.3104526-.1025646.1079841-.1092535.2609592-.0200669.45893.0624307.1349801.1293196.3374472.2006689.6074073.071349.2699602.1248605.5219192.1605351.7558847l.1471572.8503703-1.2575251-.6479012c-.7937609-.4139389-1.5072432-.5354191-2.14046819-.3644444-.63322502.1709748-1.11482555.6119031-1.44481605 1.3227982-.27647853.5849137-.52842696.9111107-.75585285.9786007-.22742588.0674901-.66220414-.0607391-1.30434782-.3846913z"
            />
          </g>
        </svg>
      );
  }
}

export default Dragon;
