import { View, Text } from 'react-native'
import React from 'react'
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg'
import { DARK_BLUE, PINK, PURPLE } from '../../../constants/colors/gradientColors'

const FeedbackHard = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={70}
            height={70}
        >
            <Path
                fill="#202020"
                d="M31.203.048c-.337.015-.613.058-.613.095s-.234.067-.52.067c-.287 0-.541.031-.565.07-.024.038-.181.07-.35.07-.169 0-.326.031-.35.07-.024.038-.215.07-.424.07-.21 0-.381.031-.381.07 0 .038-.14.07-.31.07-.172 0-.331.031-.355.07-.024.038-.167.07-.32.07-.15 0-.275.031-.275.07 0 .038-.126.07-.28.07-.154 0-.28.031-.28.07 0 .038-.126.07-.28.07-.154 0-.28.031-.28.07 0 .038-.095.07-.21.07-.116 0-.21.032-.21.07 0 .038-.11.07-.245.07s-.245.031-.245.07c0 .038-.075.07-.167.07-.156 0-.74.155-1.058.28-.077.031-.25.094-.385.14a6.07 6.07 0 0 0-.717.288.69.69 0 0 1-.262.062c-.078 0-.141.031-.141.07 0 .038-.063.07-.14.07-.077 0-.14.032-.14.07 0 .038-.077.07-.17.07-.095 0-.191.031-.215.07-.024.038-.104.07-.18.07-.074 0-.135.031-.135.07 0 .038-.063.07-.14.07-.077 0-.14.032-.14.07 0 .038-.048.07-.106.07-.106 0-.163.023-.567.233-.12.062-.238.093-.262.069-.025-.025-.045-.009-.045.036s-.063.082-.14.082c-.077 0-.14.026-.14.057 0 .031-.11.1-.245.153-.135.053-.245.122-.245.153s-.063.057-.14.057c-.077 0-.14.032-.14.07 0 .038-.063.07-.14.07-.077 0-.14.031-.14.07 0 .038-.056.07-.125.07-.068 0-.17.063-.225.14-.055.077-.157.14-.225.14-.069 0-.125.032-.125.07 0 .038-.024.062-.054.053-.083-.028-.646.24-.646.308 0 .032-.047.059-.105.059-.058 0-.105.032-.105.07 0 .038-.041.07-.092.07-.05 0-.16.063-.242.14-.082.077-.192.14-.243.14-.05 0-.137.063-.193.14-.055.077-.145.14-.2.14-.054 0-.15.055-.212.123a1.31 1.31 0 0 1-.306.222c-.105.054-.192.125-.192.157s-.048.058-.106.058c-.058 0-.204.095-.325.21-.12.115-.255.21-.299.21-.043 0-.125.063-.18.14-.055.077-.144.14-.197.14-.053 0-.185.095-.293.21-.108.115-.216.21-.24.21-.048 0-.118.055-.469.367-.118.106-.243.193-.277.193-.033 0-.195.134-.36.298-.164.165-.41.377-.544.472-.135.095-.553.488-.93.874-.823.843-.643.663-1.486 1.486-.386.377-.78.795-.874.93-.095.135-.307.38-.472.544-.164.165-.298.327-.298.36 0 .034-.087.158-.192.277-.313.35-.368.42-.368.468 0 .025-.094.133-.21.241-.115.108-.21.24-.21.293 0 .053-.063.142-.14.197-.077.055-.14.141-.14.19 0 .05-.031.09-.07.09-.038 0-.07.047-.07.105 0 .058-.031.105-.07.105-.038 0-.07.05-.07.11 0 .064-.033.088-.08.058-.047-.028-.063-.02-.037.022.024.04-.034.162-.13.273-.095.111-.173.234-.173.274 0 .04-.063.118-.14.173-.077.056-.14.145-.14.2 0 .054-.055.15-.122.212-.14.129-.358.473-.415.655-.022.068-.067.123-.101.123s-.062.047-.062.105c0 .058-.027.105-.06.105-.066 0-.335.563-.307.646.01.03-.014.054-.053.054-.038 0-.07.056-.07.125 0 .068-.063.17-.14.225-.077.056-.14.157-.14.225 0 .069-.031.125-.07.125-.038 0-.07.063-.07.14 0 .077-.031.14-.07.14-.038 0-.07.06-.07.134 0 .074-.024.145-.052.158-.077.034-.368.614-.368.734 0 .056-.031.083-.07.059-.038-.024-.07.005-.07.064 0 .059-.063.219-.14.356-.077.137-.14.311-.14.387 0 .076-.031.138-.07.138-.038 0-.07.063-.07.14 0 .077-.031.14-.07.14-.038 0-.07.061-.07.136 0 .075-.031.155-.07.179-.038.024-.07.12-.07.214s-.031.171-.07.171c-.038 0-.07.063-.07.14 0 .077-.031.14-.07.14-.038 0-.07.065-.07.143 0 .08-.063.274-.14.433-.077.16-.14.347-.14.417s-.031.127-.07.127c-.038 0-.07.077-.07.17 0 .095-.028.189-.062.21-.055.034-.105.215-.172.616a.38.38 0 0 1-.068.17c-.026.026-.048.135-.048.242 0 .106-.031.213-.07.237-.038.024-.07.134-.07.245 0 .11-.031.221-.07.245-.038.024-.07.118-.07.21s-.031.186-.07.21c-.038.024-.07.152-.07.284 0 .133-.031.241-.07.241-.038 0-.07.126-.07.28 0 .154-.031.28-.07.28-.038 0-.07.124-.07.276 0 .152-.031.295-.07.319-.038.024-.07.181-.07.35 0 .169-.031.326-.07.35-.038.024-.07.183-.07.354 0 .171-.031.311-.07.311-.039 0-.07.185-.07.416 0 .229-.031.435-.07.459-.038.024-.07.24-.07.48 0 .256-.036.473-.087.524-.128.128-.128 8.644 0 8.771.052.053.087.276.087.56 0 .26.032.491.07.515.039.024.07.23.07.46s.031.415.07.415c.039 0 .07.158.07.35 0 .193.032.35.07.35.039 0 .07.14.07.31 0 .172.032.331.07.355.039.024.07.15.07.28 0 .13.032.256.07.28.039.024.07.15.07.28 0 .13.032.256.07.28.039.024.07.15.07.28 0 .13.032.256.07.28.039.024.07.118.07.21s.032.186.07.21c.039.024.07.134.07.245 0 .111.032.221.07.245.039.024.07.13.07.237 0 .107.023.218.052.246a.237.237 0 0 1 .056.134c.006.116.102.476.17.643.032.077.096.25.143.385.047.135.145.379.217.542.073.163.132.36.132.437 0 .078.032.141.07.141.039 0 .07.063.07.14 0 .077.032.14.07.14.039 0 .07.077.07.17 0 .095.032.191.07.215.039.024.07.104.07.18 0 .074.032.135.07.135.039 0 .07.063.07.14 0 .077.032.14.07.14.039 0 .07.048.07.106 0 .058.03.16.065.227s.17.343.297.612c.128.27.257.5.286.513.028.013.052.084.052.158s.032.134.07.134c.039 0 .07.063.07.14 0 .077.032.14.07.14.039 0 .07.063.07.14 0 .077.032.14.07.14.039 0 .07.041.07.092 0 .05.063.16.14.242.077.083.14.186.14.23 0 .044.06.163.132.265.073.102.134.21.137.24.006.087.522.923.585.95.03.012.056.076.056.141 0 .066.063.164.14.22.077.056.14.15.14.21s.063.154.14.21c.077.056.14.15.14.21s.063.154.14.21c.077.055.14.15.14.21s.063.154.14.21c.077.056.14.141.14.19 0 .05.032.09.07.09.039 0 .07.04.07.09 0 .049.063.134.14.19.077.056.14.144.14.197 0 .053.095.185.21.293.116.108.21.233.21.277 0 .045.032.062.07.038.039-.024.07.006.07.066 0 .06.037.109.082.109.045 0 .062.02.039.042-.023.024.034.12.128.214.094.093.171.198.171.233 0 .034.15.22.333.412.182.193.437.471.565.617.129.147.498.535.822.862l.676.686c.82.838 1.35 1.344 1.407 1.344.039 0 .05.02.024.046-.025.026.07.126.212.222s.395.312.561.479c.167.166.333.303.369.303.035 0 .145.08.243.178.098.098.178.161.178.14 0-.048.247.148.546.434.131.126.275.228.32.228.046 0 .129.063.184.14.055.077.136.14.18.14.044 0 .178.094.299.21.12.115.26.21.31.21.05 0 .134.061.188.136.054.075.122.122.151.104.03-.018.132.047.23.144.096.097.213.176.258.176.045 0 .133.055.196.123.062.067.16.132.218.145.058.012.116.052.128.087.013.036.064.065.112.065.049 0 .145.063.215.14.07.077.17.14.22.14.053 0 .095.033.095.074 0 .041.029.056.064.034.036-.021.114.01.175.071.061.061.111.09.111.066 0-.025.083.02.184.1.102.08.23.145.284.145.053 0 .166.063.248.14.083.077.192.14.242.14.05 0 .092.032.092.07 0 .038.063.07.14.07.077 0 .14.032.14.07 0 .038.063.07.14.07.077 0 .14.031.14.07 0 .038.05.07.112.07.061 0 .195.058.297.128.102.07.296.17.431.221.135.051.275.12.312.152a.339.339 0 0 0 .192.059c.07 0 .126.031.126.07 0 .038.063.07.14.07.077 0 .14.031.14.07 0 .038.061.07.136.07.075 0 .155.031.179.07.024.038.105.07.18.07.074 0 .135.031.135.07 0 .038.057.07.126.07.157 0 .503.156.504.227 0 .03.095.053.21.053.115 0 .21.031.21.07 0 .038.057.07.126.07.07 0 .156.03.192.066a.555.555 0 0 0 .257.09c.104.014.212.047.24.075.026.027.106.049.177.049.07 0 .128.028.128.062s.087.078.192.098c.302.056.503.109.567.148.032.02.173.044.314.053.142.01.257.043.257.073 0 .031.096.056.214.056s.197.028.176.063c-.037.058.11.096.747.192.144.022.245.068.224.102-.022.035.087.063.24.063.155 0 .3.031.324.07.024.038.15.07.28.07.13 0 .256.031.28.07.024.038.183.07.354.07.171 0 .311.026.311.058 0 .031.164.065.365.074.201.009.398.043.438.075.072.059.456.114 1.297.187.25.022.477.076.505.12.072.116 8.718.116 8.79 0 .028-.044.255-.099.505-.12 1.013-.09 1.298-.13 1.361-.19.037-.035.2-.064.364-.064.163 0 .316-.032.34-.07.024-.038.166-.07.315-.07.15 0 .291-.032.315-.07.024-.038.183-.07.354-.07.171 0 .311-.028.311-.062 0-.035.102-.08.227-.1.126-.021.37-.074.543-.118a8.11 8.11 0 0 1 .542-.118c.125-.02.21-.065.188-.1-.02-.034.092-.062.25-.062.174 0 .271-.028.245-.07-.026-.042.056-.07.202-.07.135 0 .265-.032.289-.071.024-.04.072-.054.107-.032s.136 0 .223-.049c.087-.048.175-.092.194-.096a5.79 5.79 0 0 0 1.183-.395c.169-.076.366-.142.437-.147.072-.005.13-.035.13-.065s.063-.055.14-.055c.077 0 .14-.032.14-.07 0-.038.063-.07.14-.07.077 0 .14-.032.14-.07 0-.038.077-.07.17-.07.095 0 .191-.032.215-.07.024-.038.104-.07.18-.07.074 0 .135-.032.135-.07 0-.038.048-.07.106-.07.106 0 .163-.023.567-.233.12-.062.243-.09.273-.063.031.028.037.016.013-.026-.027-.046.068-.114.233-.169.153-.05.278-.118.278-.15 0-.033.063-.059.14-.059.077 0 .14-.031.14-.07 0-.039.04-.07.087-.072.049 0 .167-.063.263-.138.096-.075.224-.138.284-.138.06-.001.177-.065.26-.142.083-.077.184-.14.224-.14.09 0 .37-.153.43-.233.023-.033.064-.055.09-.05.064.014.885-.487 1.053-.642.074-.069.177-.125.227-.125.05 0 .092-.031.092-.07 0-.039.041-.07.092-.07.05 0 .16-.063.242-.14.082-.077.184-.14.226-.14.042 0 .156-.08.253-.176.097-.097.21-.155.252-.13.046.029.057.015.027-.033-.03-.048-.006-.081.059-.081.06 0 .109-.032.109-.07 0-.039.047-.07.105-.07.058 0 .105-.032.105-.07 0-.038.036-.07.08-.07.043 0 .132-.061.196-.136a.536.536 0 0 1 .218-.157c.055-.012.184-.109.286-.215.102-.105.223-.192.267-.192.045 0 .062-.032.038-.07-.024-.038.006-.07.066-.07.06 0 .109-.037.109-.082 0-.044.019-.063.041-.04.023.023.138-.05.256-.163.117-.113.242-.205.275-.205.034 0 .2-.134.369-.297.169-.164.503-.471.743-.683.24-.212.632-.586.872-.831.568-.58.488-.5 1.049-1.042.27-.26.577-.578.682-.706.106-.127.193-.206.193-.175s.085-.069.189-.222c.103-.154.308-.395.455-.536.146-.141.266-.286.266-.322 0-.036.092-.162.205-.28.112-.117.186-.232.163-.255-.023-.023-.005-.041.04-.041s.082-.05.082-.11.032-.089.07-.065c.038.024.07.005.07-.04 0-.047.087-.17.193-.274.105-.104.202-.232.214-.283a.547.547 0 0 1 .157-.212c.075-.064.136-.153.136-.197 0-.043.032-.079.07-.079.038 0 .07-.04.07-.09 0-.049.063-.135.14-.19.077-.055.14-.15.14-.21s.063-.155.14-.21c.077-.056.14-.15.14-.21s.063-.154.14-.21c.077-.056.14-.157.14-.225 0-.069.031-.125.07-.125.038 0 .07-.047.07-.105 0-.058.031-.105.07-.105.038 0 .07-.045.07-.1 0-.054.024-.109.052-.122.068-.03.306-.384.439-.653a1.69 1.69 0 0 1 .139-.245c.066-.065.28-.501.28-.569 0-.037.063-.134.14-.217.077-.083.14-.202.14-.264 0-.063.063-.181.14-.264.077-.083.14-.184.14-.224 0-.073.14-.354.211-.422.02-.02.142-.255.27-.525.129-.27.262-.545.296-.612a.604.604 0 0 0 .063-.227c0-.058.031-.106.07-.106.038 0 .07-.061.07-.136 0-.075.031-.155.07-.179.038-.024.07-.105.07-.18 0-.074.031-.135.07-.135.038 0 .07-.079.07-.175 0-.096.031-.175.07-.175.038 0 .07-.063.07-.14 0-.077.031-.14.07-.14.038 0 .07-.063.07-.14a.69.69 0 0 1 .062-.263c.034-.067.093-.2.131-.297l.148-.37c.044-.108.079-.258.079-.333 0-.075.028-.137.062-.137.06 0 .15-.333.154-.576.002-.067.032-.14.068-.162.037-.022.066-.15.066-.285 0-.146.028-.228.07-.202.042.026.07-.07.07-.245 0-.174.028-.271.07-.245.04.025.07-.045.07-.167 0-.115.031-.23.07-.253.038-.024.07-.15.07-.28 0-.13.031-.256.07-.28.038-.024.07-.152.07-.284 0-.133.032-.241.07-.241.038 0 .07-.124.07-.276 0-.151.031-.295.07-.319.038-.024.07-.183.07-.354 0-.171.031-.311.07-.311.038 0 .07-.156.07-.346 0-.19.031-.365.07-.389.038-.024.07-.213.07-.42s.031-.396.07-.42c.038-.024.07-.26.07-.523 0-.322.029-.49.087-.51.07-.022.088-.964.088-4.392 0-3.428-.019-4.37-.088-4.392-.058-.02-.087-.188-.087-.51 0-.264-.032-.5-.07-.523-.038-.024-.07-.213-.07-.42s-.032-.396-.07-.42c-.038-.024-.07-.181-.07-.35 0-.169-.032-.326-.07-.35-.038-.024-.07-.181-.07-.35 0-.169-.032-.326-.07-.35-.038-.024-.07-.168-.07-.32 0-.15-.032-.275-.07-.275-.038 0-.07-.108-.07-.24 0-.133-.032-.261-.07-.285-.038-.024-.07-.15-.07-.28 0-.13-.032-.256-.07-.28-.038-.024-.07-.136-.07-.25 0-.112-.032-.205-.07-.205-.038 0-.07-.093-.07-.206 0-.113-.032-.225-.07-.249-.038-.024-.07-.13-.07-.238 0-.106-.022-.215-.048-.242a.38.38 0 0 1-.068-.169c-.067-.401-.117-.582-.172-.616-.034-.021-.062-.1-.062-.175a.656.656 0 0 0-.064-.258c-.176-.334-.356-.8-.356-.926 0-.078-.032-.141-.07-.141-.038 0-.07-.063-.07-.14 0-.077-.032-.14-.07-.14-.038 0-.07-.077-.07-.17 0-.095-.032-.191-.07-.215-.038-.024-.07-.105-.07-.18 0-.074-.032-.135-.07-.135-.038 0-.07-.063-.07-.14 0-.077-.032-.14-.07-.14-.038 0-.07-.063-.07-.14 0-.077-.032-.14-.07-.14-.038 0-.07-.055-.07-.123.001-.135-.562-1.298-.647-1.335-.029-.013-.053-.07-.053-.126 0-.056-.063-.17-.14-.252-.077-.083-.14-.201-.14-.264s-.063-.181-.14-.264c-.077-.082-.14-.184-.14-.226 0-.11-.358-.801-.429-.828a.106.106 0 0 1-.061-.093c0-.038-.094-.206-.21-.374-.115-.168-.21-.332-.21-.365 0-.032-.063-.105-.14-.16-.077-.056-.14-.15-.14-.21s-.063-.155-.14-.21c-.077-.055-.14-.15-.14-.21s-.063-.155-.14-.21c-.077-.056-.14-.15-.14-.21s-.063-.155-.14-.21c-.077-.056-.14-.136-.14-.18 0-.044-.095-.178-.21-.299-.116-.12-.21-.255-.21-.297 0-.043-.095-.166-.21-.274-.115-.108-.21-.216-.21-.241 0-.047-.055-.117-.367-.468-.106-.119-.193-.243-.193-.277 0-.033-.134-.195-.298-.36a5.297 5.297 0 0 1-.472-.544c-.095-.135-.488-.553-.874-.93-.845-.825-.662-.642-1.501-1.502-.385-.395-.717-.718-.737-.718-.052 0-.273-.188-.72-.612-.213-.203-.415-.368-.45-.368-.036 0-.14-.07-.233-.157-.256-.24-.374-.333-.424-.333-.025 0-.133-.095-.241-.21-.108-.115-.231-.21-.274-.21-.042 0-.176-.095-.297-.21-.12-.115-.255-.21-.299-.21-.043 0-.124-.063-.18-.14-.055-.077-.15-.14-.21-.14s-.155-.063-.21-.14c-.055-.077-.15-.14-.21-.14s-.154-.063-.21-.14c-.055-.077-.15-.14-.21-.14s-.154-.063-.21-.14c-.055-.077-.127-.14-.16-.14s-.197-.095-.365-.21c-.168-.115-.336-.21-.374-.21-.038 0-.08-.024-.093-.053-.031-.07-.721-.437-.823-.437-.044 0-.148-.063-.231-.14-.083-.077-.192-.14-.242-.14-.05 0-.092-.031-.092-.07 0-.039-.063-.07-.14-.07-.077 0-.14-.031-.14-.07 0-.038-.063-.07-.14-.07-.077 0-.14-.024-.14-.052 0-.03-.174-.132-.385-.228-.211-.096-.385-.199-.385-.228 0-.028-.048-.052-.106-.052-.103 0-.177-.03-.506-.2a.731.731 0 0 0-.262-.08c-.058 0-.106-.031-.106-.07 0-.038-.063-.07-.14-.07-.077 0-.14-.031-.14-.07 0-.038-.063-.07-.14-.07-.077 0-.14-.032-.14-.07 0-.038-.094-.07-.21-.07-.115 0-.21-.031-.21-.07 0-.038-.063-.07-.14-.07-.077 0-.14-.031-.14-.07 0-.038-.063-.07-.14-.07a.744.744 0 0 1-.28-.07l-.28-.14a.745.745 0 0 0-.28-.07c-.077 0-.14-.031-.14-.07 0-.038-.063-.07-.14-.07a.672.672 0 0 1-.263-.064c-.2-.104-.86-.286-1.04-.286-.092 0-.167-.032-.167-.07 0-.038-.108-.07-.24-.07-.133 0-.261-.032-.285-.07-.024-.038-.12-.07-.214-.07s-.171-.031-.171-.07c0-.039-.126-.07-.28-.07-.154 0-.28-.032-.28-.07 0-.039-.126-.07-.28-.07-.154 0-.28-.032-.28-.07 0-.039-.124-.07-.276-.07-.151 0-.295-.032-.319-.07-.024-.039-.183-.07-.354-.07C42.14.63 42 .598 42 .56c0-.039-.157-.07-.35-.07-.192 0-.35-.032-.35-.07 0-.039-.185-.07-.416-.07-.228 0-.435-.032-.459-.07-.024-.039-.26-.07-.523-.07-.318 0-.49-.03-.509-.086-.028-.085-6.617-.146-8.19-.076zm5.827 14.406c1.469.161 1.64.19 2.905.495 1.68.405 3.778 1.233 5.18 2.046 4.864 2.82 8.277 7.16 9.753 12.405.114.404.226.83.249.945.023.116.076.367.117.56.538 2.503.536 5.665-.006 8.225l-.14.665c-1.353 6.492-6.986 12.633-13.544 14.765-1.104.358-1.18.38-2.151.596-2.626.587-5.734.643-8.068.147l-.665-.14c-7.585-1.575-14.224-8.054-15.748-15.368l-.14-.665c-.543-2.566-.552-5.54-.022-8.12.059-.289.123-.604.141-.7.31-1.61 1.642-4.853 2.477-6.03.073-.103.132-.21.132-.238 0-.067.91-1.344 1.385-1.944 2.57-3.243 6.603-5.93 10.427-6.95l.77-.207c.222-.06.576-.14.788-.178l.805-.144c1.493-.267 3.784-.337 5.355-.165zm-7.247 7.269c-.566.218-.76.53-.865 1.377-.246 2.007-1.771 3.43-3.677 3.43-1.31 0-1.568 1.973-.303 2.315.316.086 1.319.04 1.697-.077 2.466-.762 3.909-2.18 4.512-4.433.48-1.792-.186-3.068-1.364-2.612zm9.752-.024c-1.744.526-.66 4.475 1.673 6.098 1.375.956 3.45 1.396 4.194.89.917-.624.46-2.157-.643-2.157-1.271 0-2.74-.885-3.258-1.962-.297-.619-.324-.713-.416-1.44-.145-1.142-.725-1.677-1.55-1.429zm-14.598 9.717a1.2 1.2 0 0 0-.653 1.779c.191.301.298.37 1.61 1.03.774.39 1.406.74 1.406.776 0 .038-.606.371-1.348.741-1.477.738-1.546.784-1.74 1.163-.393.77.18 1.698 1.05 1.698.382 0 .528-.064 2.883-1.25 3.158-1.59 3.145-1.58 3.145-2.436 0-.669-.149-.776-3.097-2.245-2.494-1.243-2.853-1.381-3.256-1.256zm19.443.006c-.362.12-5.152 2.549-5.31 2.692-.494.454-.494 1.318 0 1.772.441.403 5.262 2.71 5.672 2.713.87.008 1.438-.925 1.04-1.706-.182-.355-.297-.431-1.804-1.185-.703-.351-1.278-.67-1.278-.707 0-.037.633-.386 1.406-.776 1.578-.795 1.818-1.012 1.81-1.636-.009-.779-.827-1.4-1.536-1.166zM29.802 43.554c-.983.261-1.129 1.694-.225 2.206l.278.158h10.29l.278-.158c.932-.528.756-1.952-.272-2.211-.406-.102-9.962-.097-10.349.005z"
            />
            <Path
                fill="url(#b)"
                d="M32.865 14.457c-.424.048-.96.12-1.19.162l-.805.144a11.42 11.42 0 0 0-.788.178l-.77.207c-3.824 1.02-7.856 3.707-10.427 6.95-.476.6-1.385 1.877-1.385 1.944 0 .028-.06.135-.132.237-.835 1.178-2.167 4.42-2.477 6.031-.018.096-.082.411-.142.7-.529 2.58-.52 5.555.023 8.12l.14.665c1.524 7.314 8.163 13.793 15.748 15.369.212.044.51.106.665.14 2.334.495 5.442.438 8.067-.148.971-.216 1.048-.238 2.152-.596 6.558-2.132 12.19-8.273 13.544-14.765l.14-.665c.542-2.56.544-5.722.006-8.225a52.54 52.54 0 0 1-.117-.56c-1.043-5.245-4.9-10.392-10.002-13.35-1.667-.966-3.808-1.76-6.125-2.27-1.53-.337-4.403-.463-6.125-.268zm-2.408 7.254c.848.287 1.08 1.17.69 2.625-.604 2.252-2.046 3.67-4.512 4.432-.378.117-1.382.163-1.697.077-1.265-.342-1.007-2.315.303-2.315 1.906 0 3.431-1.423 3.677-3.43.137-1.117.74-1.66 1.539-1.39zm9.76.012c.567.219.756.524.867 1.405.093.727.12.821.417 1.44.517 1.077 1.987 1.962 3.258 1.962 1.484 0 1.513 2.211.03 2.355-2.968.288-6.029-2.592-6.092-5.731-.023-1.135.65-1.768 1.52-1.431zM28.193 32.672c2.948 1.469 3.097 1.577 3.097 2.245 0 .856.013.846-3.145 2.437-2.355 1.185-2.501 1.249-2.883 1.249-.87 0-1.443-.928-1.05-1.698.194-.379.263-.425 1.74-1.163.742-.37 1.348-.703 1.348-.74 0-.038-.633-.387-1.406-.777-1.312-.66-1.419-.729-1.61-1.03-.336-.53-.236-1.145.25-1.534.605-.484.727-.45 3.659 1.01zm17.236-1.042c.52.418.63 1.022.286 1.565-.19.301-.297.37-1.61 1.03-.773.39-1.405.74-1.405.776 0 .038.575.356 1.277.707 1.508.754 1.623.83 1.805 1.185.398.781-.17 1.713-1.04 1.706-.373-.003-.555-.082-2.952-1.283-3.053-1.53-3.08-1.55-3.08-2.316 0-.765.035-.79 3.01-2.278 3.105-1.552 3.128-1.559 3.709-1.092zM40.15 43.549c1.028.259 1.204 1.683.272 2.211l-.278.158h-10.29l-.278-.158c-.904-.512-.758-1.945.225-2.206.387-.102 9.943-.108 10.349-.005z"
            />
            <Defs>
                <LinearGradient
                    id="b"
                    x1={20.5}
                    x2={47.5}
                    y1={20}
                    y2={49}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor={DARK_BLUE} />
                    <Stop stopColor={PURPLE} offset={0.521} />
                    <Stop stopColor={PINK} offset={1} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default FeedbackHard