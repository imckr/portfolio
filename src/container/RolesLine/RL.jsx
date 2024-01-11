import React from "react";
import "./RL.css";
import line from "../../assets/Vector 2.svg";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { MotionPathHelper } from "gsap-trial/MotionPathHelper";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.registerPlugin(MotionPathPlugin);
// gsap.registerPlugin(MotionPathHelper);

const roles = [".Roles", ".Role1", ".Role2", ".Role3"];

gsap.to(".Roles", {
  duration: 10,
  repeat: 1,
  // yoyo: true,
  ease: "power1.inOut",
  // stagger: 0.3,
  motionPath: {
    path: "#path1",
    align: "#path1",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
    start: 0,
    end: 0.9,
  },
});

gsap.to(".Role1", {
  duration: 10,
  repeat: 1,
  // yoyo: true,
  ease: "power1.inOut",
  motionPath: {
    path: "#path1",
    align: "#path1",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
    start: 0,
    end: 0.7,
  },
});

gsap.fromTo(
  "#path2",
  {
    drawSVG: 0,
  },
  {
    drawSVG: 1500,
    duration: 2,
    repeat: 4,
    yoyo: true,
  });

// MotionPathHelper.create("#Roles")

const RL = () => {
  const role1 = "Designer";
  const role2 = "Developer";
  const role3 = "Coder";
  const scrollD = "<| Scroll Down";

  return (
    <div className="port__roles-container">
      <svg
        className="role-path-anim"
        width="1406"
        height="595"
        viewBox="0 0 1406 595"
        fill="none"
      >
        <path
          id="path1"
          d="M1405 1C1311.32 166.73 1114.87 464.306 625.471 243.026C136.07 21.7451 1.00015 502.339 1 595"
          stroke="#777676"
          stroke-width="2"
        />
      </svg>

      <svg
        className="scrollB"
        width="1424"
        height="608"
        viewBox="0 0 1424 608"
        fill="none"
      >
        {/* <g filter="url(#filter0_d_144_186)"> */}
        <path
          id="path2"
          d="M1408.67 6C1408.67 8.94552 1411.05 11.3333 1414 11.3333C1416.95 11.3333 1419.33 8.94552 1419.33 6C1419.33 3.05448 1416.95 0.666667 1414 0.666667C1411.05 0.666667 1408.67 3.05448 1408.67 6ZM634.471 248.026L634.883 247.114L634.471 248.026ZM10 600L16.0545 590.168L4.51215 589.84L10 600ZM11.1772 593.753C11.2064 593.201 10.7829 592.731 10.2314 592.701C9.6799 592.672 9.20916 593.096 9.17997 593.647L11.1772 593.753ZM10.3655 580.446C10.2993 580.994 10.69 581.493 11.2383 581.559C11.7866 581.625 12.2848 581.234 12.3511 580.686L10.3655 580.446ZM14.2157 567.781C14.3061 567.236 13.9377 566.721 13.3929 566.631C12.8481 566.54 12.3331 566.909 12.2427 567.454L14.2157 567.781ZM14.614 554.586C14.5049 555.127 14.8553 555.655 15.3967 555.764C15.9381 555.873 16.4654 555.522 16.5746 554.981L14.614 554.586ZM19.3486 542.214C19.4736 541.676 19.1389 541.139 18.6009 541.014C18.063 540.889 17.5255 541.224 17.4005 541.762L19.3486 542.214ZM20.5639 528.939C20.4246 529.474 20.7449 530.02 21.2794 530.159C21.8138 530.298 22.36 529.978 22.4993 529.444L20.5639 528.939ZM25.959 516.817C26.1114 516.286 25.8047 515.732 25.2738 515.58C24.743 515.427 24.1891 515.734 24.0367 516.265L25.959 516.817ZM27.7812 503.777C27.6165 504.305 27.9103 504.865 28.4374 505.03C28.9646 505.195 29.5254 504.901 29.6902 504.374L27.7812 503.777ZM33.7546 491.873C33.9314 491.35 33.6505 490.783 33.1272 490.606C32.604 490.429 32.0365 490.71 31.8598 491.233L33.7546 491.873ZM36.1899 478.87C36.0016 479.389 36.2698 479.962 36.789 480.151C37.3081 480.339 37.8817 480.071 38.07 479.552L36.1899 478.87ZM42.6547 467.336C42.8544 466.821 42.599 466.241 42.0841 466.042C41.5692 465.842 40.9898 466.097 40.7901 466.612L42.6547 467.336ZM45.7049 454.35C45.4937 454.86 45.7363 455.445 46.2466 455.656C46.7569 455.867 47.3418 455.625 47.5529 455.115L45.7049 454.35ZM52.6494 443.174C52.8718 442.668 52.6423 442.078 52.1368 441.856C51.6313 441.633 51.0412 441.863 50.8188 442.368L52.6494 443.174ZM56.2652 430.359C56.0314 430.86 56.2474 431.455 56.7478 431.689C57.2481 431.922 57.8433 431.706 58.0771 431.206L56.2652 430.359ZM63.7225 419.475C63.9677 418.98 63.7653 418.381 63.2704 418.135C62.7755 417.89 62.1756 418.093 61.9304 418.587L63.7225 419.475ZM67.906 406.872C67.6492 407.361 67.8375 407.966 68.3265 408.223C68.8155 408.479 69.42 408.291 69.6768 407.802L67.906 406.872ZM75.881 396.319C76.1493 395.836 75.9755 395.227 75.4928 394.959C75.0101 394.691 74.4013 394.865 74.1329 395.347L75.881 396.319ZM80.653 383.95C80.3728 384.426 80.5316 385.038 81.0076 385.319C81.4835 385.599 82.0965 385.44 82.3766 384.964L80.653 383.95ZM89.1457 373.787C89.4378 373.318 89.2946 372.701 88.8259 372.409C88.3571 372.117 87.7404 372.261 87.4483 372.729L89.1457 373.787ZM94.531 361.684C94.2268 362.145 94.3539 362.765 94.8149 363.069C95.2758 363.374 95.8961 363.247 96.2003 362.786L94.531 361.684ZM103.545 351.972C103.861 351.519 103.751 350.896 103.298 350.58C102.846 350.263 102.222 350.373 101.906 350.826L103.545 351.972ZM109.57 340.18C109.241 340.624 109.334 341.25 109.777 341.579C110.221 341.908 110.847 341.815 111.176 341.371L109.57 340.18ZM119.109 330.982C119.451 330.548 119.375 329.919 118.941 329.577C118.507 329.236 117.879 329.311 117.537 329.745L119.109 330.982ZM125.798 319.556C125.444 319.98 125.5 320.61 125.924 320.964C126.348 321.319 126.978 321.262 127.333 320.838L125.798 319.556ZM135.865 310.939C136.232 310.526 136.194 309.894 135.782 309.527C135.369 309.16 134.737 309.197 134.37 309.61L135.865 310.939ZM143.239 299.944C142.859 300.345 142.876 300.978 143.277 301.358C143.678 301.737 144.311 301.72 144.691 301.319L143.239 299.944ZM153.829 291.981C154.221 291.593 154.225 290.96 153.837 290.567C153.448 290.174 152.815 290.171 152.422 290.559L153.829 291.981ZM161.905 281.49C161.499 281.865 161.474 282.498 161.849 282.904C162.224 283.309 162.857 283.334 163.262 282.959L161.905 281.49ZM173.003 274.259C173.422 273.899 173.468 273.267 173.108 272.849C172.747 272.431 172.116 272.384 171.697 272.745L173.003 274.259ZM181.787 264.352C181.356 264.698 181.287 265.327 181.633 265.758C181.978 266.189 182.608 266.258 183.038 265.912L181.787 264.352ZM193.368 257.932C193.812 257.602 193.904 256.976 193.574 256.533C193.245 256.09 192.618 255.997 192.175 256.327L193.368 257.932ZM202.856 248.689C202.4 249.002 202.285 249.624 202.598 250.079C202.91 250.535 203.533 250.65 203.988 250.337L202.856 248.689ZM214.876 243.156C215.343 242.861 215.482 242.243 215.187 241.776C214.891 241.31 214.274 241.171 213.807 241.466L214.876 243.156ZM225.05 234.656C224.572 234.933 224.409 235.545 224.686 236.023C224.963 236.5 225.574 236.663 226.052 236.387L225.05 234.656ZM237.447 230.079C237.935 229.821 238.122 229.216 237.864 228.728C237.606 228.239 237.001 228.052 236.513 228.31L237.447 230.079ZM248.28 222.391C247.782 222.63 247.571 223.227 247.809 223.725C248.048 224.223 248.645 224.434 249.143 224.196L248.28 222.391ZM260.973 218.823C261.481 218.605 261.715 218.017 261.496 217.509C261.278 217.002 260.69 216.768 260.183 216.986L260.973 218.823ZM272.431 212.005C271.915 212.202 271.658 212.781 271.855 213.296C272.053 213.812 272.632 214.07 273.147 213.872L272.431 212.005ZM285.322 209.478C285.845 209.301 286.125 208.733 285.948 208.21C285.771 207.687 285.203 207.407 284.68 207.584L285.322 209.478ZM297.264 203.6C296.734 203.756 296.431 204.312 296.588 204.842C296.744 205.371 297.3 205.674 297.83 205.518L297.264 203.6ZM310.348 202.091C310.884 201.955 311.208 201.411 311.073 200.876C310.937 200.341 310.393 200.016 309.858 200.152L310.348 202.091ZM322.664 197.176C322.123 197.29 321.778 197.821 321.893 198.361C322.008 198.902 322.539 199.247 323.079 199.132L322.664 197.176ZM335.911 196.664C336.455 196.57 336.82 196.053 336.726 195.508C336.632 194.964 336.114 194.599 335.57 194.693L335.911 196.664ZM348.478 192.709C347.93 192.783 347.547 193.286 347.62 193.834C347.694 194.381 348.198 194.765 348.745 194.691L348.478 192.709ZM361.882 193.164C362.431 193.11 362.833 192.621 362.78 192.071C362.726 191.522 362.237 191.12 361.687 191.173L361.882 193.164ZM374.58 190.139C374.029 190.174 373.61 190.649 373.645 191.2C373.679 191.751 374.154 192.17 374.705 192.135L374.58 190.139ZM387.805 191.538C388.357 191.522 388.792 191.062 388.776 190.509C388.761 189.957 388.3 189.523 387.748 189.538L387.805 191.538ZM400.883 189.382C400.331 189.379 399.881 189.825 399.879 190.377C399.876 190.93 400.322 191.379 400.874 191.382L400.883 189.382ZM413.825 191.646C414.377 191.666 414.841 191.235 414.861 190.683C414.881 190.131 414.449 189.667 413.898 189.647L413.825 191.646ZM427.17 190.334C426.619 190.297 426.142 190.714 426.105 191.265C426.068 191.816 426.484 192.293 427.035 192.33L427.17 190.334ZM439.915 193.386C440.465 193.439 440.953 193.037 441.006 192.487C441.059 191.937 440.657 191.449 440.107 191.395L439.915 193.386ZM453.104 192.838C452.556 192.77 452.056 193.158 451.987 193.706C451.919 194.254 452.307 194.754 452.855 194.823L453.104 192.838ZM466.032 196.66C466.578 196.744 467.088 196.369 467.172 195.823C467.256 195.277 466.881 194.767 466.335 194.683L466.032 196.66ZM479.037 196.8C478.494 196.703 477.974 197.064 477.876 197.608C477.778 198.151 478.14 198.671 478.683 198.769L479.037 196.8ZM491.489 201.237C492.03 201.348 492.559 201 492.67 200.459C492.781 199.918 492.433 199.389 491.892 199.278L491.489 201.237ZM504.958 202.133C504.42 202.008 503.883 202.344 503.759 202.882C503.634 203.42 503.97 203.957 504.508 204.081L504.958 202.133ZM516.97 207.111C517.505 207.248 518.05 206.925 518.186 206.389C518.322 205.854 517.999 205.31 517.464 205.173L516.97 207.111ZM530.077 208.538C529.545 208.389 528.994 208.701 528.846 209.233C528.697 209.765 529.009 210.316 529.541 210.464L530.077 208.538ZM542.302 214.165C542.831 214.324 543.388 214.025 543.548 213.496C543.707 212.967 543.408 212.409 542.879 212.25L542.302 214.165ZM555.287 216.127C554.762 215.957 554.198 216.245 554.028 216.771C553.858 217.296 554.146 217.86 554.672 218.03L555.287 216.127ZM566.931 222.124C567.453 222.304 568.023 222.027 568.202 221.505C568.382 220.983 568.105 220.413 567.583 220.234L566.931 222.124ZM580.046 224.658C579.527 224.469 578.953 224.736 578.763 225.254C578.574 225.773 578.841 226.347 579.359 226.537L580.046 224.658ZM591.775 231.201C592.29 231.4 592.869 231.144 593.068 230.628C593.266 230.113 593.01 229.534 592.495 229.335L591.775 231.201ZM604.42 234.052C603.908 233.844 603.325 234.091 603.117 234.603C602.91 235.115 603.157 235.698 603.669 235.905L604.42 234.052ZM615.713 240.898C616.221 241.114 616.808 240.876 617.024 240.368C617.239 239.859 617.002 239.273 616.493 239.057L615.713 240.898ZM628.716 244.355C628.211 244.131 627.62 244.359 627.397 244.864C627.173 245.369 627.401 245.96 627.906 246.183L628.716 244.355ZM640.058 251.63C640.562 251.854 641.153 251.628 641.378 251.123C641.603 250.619 641.376 250.028 640.872 249.803L640.058 251.63ZM652.761 255.024C652.255 254.805 651.666 255.038 651.447 255.545C651.227 256.052 651.46 256.641 651.967 256.86L652.761 255.024ZM663.76 261.885C664.269 262.099 664.855 261.859 665.069 261.35C665.283 260.84 665.043 260.254 664.534 260.041L663.76 261.885ZM676.19 264.854C675.678 264.646 675.095 264.892 674.887 265.404C674.679 265.916 674.925 266.499 675.437 266.707L676.19 264.854ZM687.447 271.504C687.961 271.705 688.542 271.452 688.743 270.938C688.945 270.424 688.692 269.844 688.178 269.642L687.447 271.504ZM700.248 274.294C699.732 274.098 699.155 274.359 698.959 274.875C698.764 275.392 699.024 275.969 699.541 276.164L700.248 274.294ZM711.507 280.605C712.026 280.794 712.6 280.526 712.789 280.007C712.978 279.488 712.71 278.914 712.191 278.726L711.507 280.605ZM724.053 282.957C723.532 282.775 722.961 283.05 722.779 283.571C722.597 284.092 722.872 284.663 723.393 284.845L724.053 282.957ZM735.766 289.073C736.289 289.248 736.856 288.965 737.031 288.442C737.206 287.918 736.923 287.351 736.399 287.176L735.766 289.073ZM748.605 291.159C748.079 290.992 747.516 291.282 747.349 291.809C747.181 292.335 747.472 292.897 747.998 293.065L748.605 291.159ZM760.092 296.823C760.62 296.983 761.179 296.684 761.339 296.156C761.499 295.627 761.2 295.069 760.671 294.909L760.092 296.823ZM773.029 298.551C772.499 298.399 771.945 298.706 771.793 299.237C771.641 299.768 771.948 300.321 772.479 300.474L773.029 298.551ZM784.945 303.941C785.479 304.085 786.027 303.769 786.171 303.236C786.315 302.703 785.999 302.154 785.466 302.01L784.945 303.941ZM797.75 305.219C797.215 305.084 796.671 305.408 796.536 305.944C796.4 306.479 796.725 307.023 797.26 307.158L797.75 305.219ZM809.696 310.193C810.234 310.319 810.772 309.986 810.899 309.448C811.025 308.911 810.692 308.372 810.154 308.246L809.696 310.193ZM822.779 311.101C822.239 310.984 821.707 311.326 821.59 311.866C821.473 312.406 821.815 312.938 822.355 313.055L822.779 311.101ZM834.849 315.652C835.39 315.759 835.917 315.407 836.024 314.866C836.132 314.324 835.78 313.798 835.238 313.69L834.849 315.652ZM847.753 316.057C847.209 315.96 846.689 316.321 846.592 316.865C846.494 317.408 846.855 317.928 847.399 318.026L847.753 316.057ZM860.197 320.199C860.742 320.286 861.255 319.915 861.342 319.37C861.429 318.824 861.058 318.311 860.513 318.224L860.197 320.199ZM873.093 320.111C872.546 320.034 872.041 320.416 871.964 320.963C871.888 321.51 872.269 322.015 872.816 322.092L873.093 320.111ZM885.522 323.739C886.07 323.805 886.568 323.413 886.633 322.865C886.699 322.317 886.307 321.819 885.759 321.753L885.522 323.739ZM898.59 323.148C898.041 323.094 897.551 323.496 897.497 324.046C897.444 324.596 897.846 325.085 898.395 325.139L898.59 323.148ZM911.076 326.244C911.627 326.286 912.107 325.874 912.149 325.323C912.192 324.773 911.779 324.292 911.228 324.25L911.076 326.244ZM924.056 325.085C923.504 325.056 923.033 325.479 923.003 326.03C922.974 326.582 923.397 327.053 923.948 327.082L924.056 325.085ZM936.824 327.627C937.376 327.644 937.837 327.21 937.854 326.658C937.871 326.106 937.437 325.644 936.885 325.628L936.824 327.627ZM949.508 325.867C948.956 325.863 948.505 326.308 948.501 326.86C948.497 327.412 948.942 327.863 949.494 327.867L949.508 325.867ZM962.509 327.801C963.061 327.791 963.501 327.336 963.491 326.784C963.481 326.231 963.026 325.792 962.474 325.801L962.509 327.801ZM975.22 325.419C974.668 325.443 974.24 325.909 974.264 326.461C974.287 327.013 974.753 327.441 975.305 327.418L975.22 325.419ZM988.118 326.708C988.669 326.671 989.085 326.194 989.048 325.643C989.01 325.092 988.533 324.675 987.982 324.713L988.118 326.708ZM1000.79 323.668C1000.24 323.72 999.839 324.208 999.891 324.758C999.943 325.308 1000.43 325.711 1000.98 325.659L1000.79 323.668ZM1013.62 324.289C1014.17 324.222 1014.56 323.724 1014.49 323.175C1014.42 322.627 1013.93 322.237 1013.38 322.304L1013.62 324.289ZM1026.19 320.561C1025.64 320.643 1025.26 321.152 1025.35 321.698C1025.43 322.245 1025.94 322.621 1026.48 322.539L1026.19 320.561ZM1039.1 320.462C1039.65 320.365 1040.01 319.845 1039.91 319.302C1039.81 318.758 1039.29 318.396 1038.75 318.493L1039.1 320.462ZM1051.35 316.052C1050.81 316.165 1050.46 316.695 1050.57 317.236C1050.69 317.776 1051.21 318.123 1051.76 318.01L1051.35 316.052ZM1064.29 315.204C1064.83 315.076 1065.16 314.536 1065.03 313.999C1064.91 313.462 1064.37 313.131 1063.83 313.259L1064.29 315.204ZM1076.2 310.109C1075.67 310.253 1075.35 310.802 1075.5 311.335C1075.64 311.869 1076.19 312.184 1076.72 312.04L1076.2 310.109ZM1089.12 308.494C1089.65 308.334 1089.94 307.776 1089.78 307.247C1089.62 306.719 1089.07 306.42 1088.54 306.579L1089.12 308.494ZM1100.67 302.715C1100.15 302.89 1099.87 303.457 1100.04 303.98C1100.22 304.504 1100.78 304.786 1101.31 304.611L1100.67 302.715ZM1113.49 300.326C1114.01 300.135 1114.27 299.56 1114.08 299.042C1113.89 298.524 1113.31 298.259 1112.8 298.45L1113.49 300.326ZM1124.66 293.872C1124.15 294.079 1123.9 294.661 1124.11 295.173C1124.32 295.686 1124.9 295.934 1125.41 295.727L1124.66 293.872ZM1137.32 290.717C1137.83 290.495 1138.06 289.906 1137.84 289.4C1137.62 288.894 1137.03 288.664 1136.52 288.885L1137.32 290.717ZM1148.11 283.601C1147.61 283.838 1147.39 284.434 1147.63 284.933C1147.87 285.432 1148.46 285.645 1148.96 285.408L1148.11 283.601ZM1160.55 279.703C1161.04 279.451 1161.23 278.849 1160.98 278.357C1160.73 277.865 1160.13 277.67 1159.63 277.922L1160.55 279.703ZM1170.9 271.954C1170.42 272.219 1170.24 272.827 1170.5 273.311C1170.77 273.796 1171.38 273.973 1171.86 273.707L1170.9 271.954ZM1183.08 267.339C1183.55 267.059 1183.71 266.447 1183.43 265.97C1183.15 265.494 1182.54 265.335 1182.06 265.614L1183.08 267.339ZM1192.97 258.998C1192.5 259.291 1192.36 259.908 1192.66 260.377C1192.95 260.845 1193.57 260.986 1194.03 260.693L1192.97 258.998ZM1204.86 253.699C1205.32 253.393 1205.44 252.772 1205.14 252.312C1204.83 251.853 1204.21 251.728 1203.75 252.034L1204.86 253.699ZM1214.27 244.813C1213.82 245.132 1213.72 245.756 1214.04 246.207C1214.35 246.658 1214.98 246.765 1215.43 246.446L1214.27 244.813ZM1225.85 238.867C1226.29 238.536 1226.38 237.909 1226.05 237.467C1225.72 237.025 1225.1 236.935 1224.65 237.265L1225.85 238.867ZM1234.77 229.486C1234.34 229.828 1234.26 230.457 1234.61 230.89C1234.95 231.324 1235.58 231.397 1236.01 231.055L1234.77 229.486ZM1246.02 222.936C1246.44 222.583 1246.5 221.952 1246.15 221.528C1245.79 221.103 1245.16 221.046 1244.74 221.399L1246.02 222.936ZM1254.44 213.111C1254.03 213.475 1253.98 214.107 1254.35 214.522C1254.71 214.938 1255.34 214.979 1255.76 214.616L1254.44 213.111ZM1265.35 206.003C1265.76 205.629 1265.79 204.996 1265.41 204.59C1265.04 204.184 1264.4 204.157 1264 204.531L1265.35 206.003ZM1273.29 195.776C1272.89 196.159 1272.88 196.792 1273.27 197.19C1273.65 197.587 1274.28 197.599 1274.68 197.215L1273.29 195.776ZM1283.85 188.165C1284.24 187.773 1284.24 187.139 1283.84 186.751C1283.45 186.362 1282.82 186.365 1282.43 186.758L1283.85 188.165ZM1291.32 177.579C1290.94 177.98 1290.96 178.612 1291.36 178.992C1291.76 179.372 1292.39 179.355 1292.77 178.954L1291.32 177.579ZM1301.53 169.517C1301.9 169.108 1301.87 168.476 1301.46 168.104C1301.05 167.733 1300.42 167.764 1300.05 168.173L1301.53 169.517ZM1308.55 158.612C1308.19 159.029 1308.23 159.66 1308.65 160.023C1309.06 160.386 1309.69 160.342 1310.06 159.926L1308.55 158.612ZM1318.4 150.151C1318.76 149.727 1318.7 149.097 1318.28 148.742C1317.85 148.388 1317.22 148.444 1316.87 148.867L1318.4 150.151ZM1325 138.963C1324.65 139.393 1324.72 140.023 1325.15 140.369C1325.58 140.716 1326.21 140.648 1326.56 140.218L1325 138.963ZM1334.51 130.154C1334.85 129.718 1334.77 129.09 1334.33 128.751C1333.9 128.413 1333.27 128.492 1332.93 128.928L1334.51 130.154ZM1340.71 118.715C1340.38 119.157 1340.47 119.783 1340.91 120.114C1341.36 120.445 1341.98 120.355 1342.31 119.913L1340.71 118.715ZM1349.89 109.613C1350.21 109.165 1350.11 108.54 1349.66 108.216C1349.22 107.893 1348.59 107.993 1348.27 108.441L1349.89 109.613ZM1355.72 97.9464C1355.41 98.399 1355.52 99.0225 1355.97 99.3389C1356.42 99.6553 1357.05 99.5448 1357.36 99.0921L1355.72 97.9464ZM1364.63 88.5339C1364.94 88.0766 1364.82 87.4548 1364.36 87.1452C1363.9 86.8356 1363.28 86.9554 1362.97 87.4128L1364.63 88.5339ZM1370.08 76.7396C1369.78 77.2013 1369.91 77.8213 1370.37 78.1244C1370.83 78.4275 1371.45 78.2989 1371.76 77.8372L1370.08 76.7396ZM1378.74 67.0381C1379.04 66.5725 1378.9 65.9542 1378.44 65.6573C1377.97 65.3603 1377.35 65.4971 1377.06 65.9627L1378.74 67.0381ZM1383.84 55.1819C1383.55 55.6511 1383.69 56.2676 1384.16 56.5589C1384.63 56.8501 1385.25 56.7059 1385.54 56.2366L1383.84 55.1819ZM1392.29 45.2176C1392.58 44.7451 1392.42 44.1303 1391.95 43.8444C1391.48 43.5584 1390.86 43.7097 1390.58 44.1822L1392.29 45.2176ZM1397.15 33.187C1396.87 33.6624 1397.03 34.2757 1397.51 34.5568C1397.98 34.8379 1398.59 34.6804 1398.88 34.205L1397.15 33.187ZM1405.32 23.1843C1405.6 22.7064 1405.44 22.0946 1404.96 21.8177C1404.48 21.5409 1403.87 21.7038 1403.59 22.1817L1405.32 23.1843ZM1410.02 10.9907C1409.75 11.4706 1409.91 12.0812 1410.39 12.3545C1410.87 12.6277 1411.48 12.4602 1411.76 11.9802L1410.02 10.9907ZM12.3511 580.686C12.8361 576.673 13.4555 572.361 14.2157 567.781L12.2427 567.454C11.4781 572.06 10.8544 576.401 10.3655 580.446L12.3511 580.686ZM16.5746 554.981C17.4012 550.88 18.3248 546.619 19.3486 542.214L17.4005 541.762C16.3724 546.185 15.4446 550.465 14.614 554.586L16.5746 554.981ZM22.4993 529.444C23.5713 525.331 24.7238 521.118 25.959 516.817L24.0367 516.265C22.797 520.582 21.6402 524.81 20.5639 528.939L22.4993 529.444ZM29.6902 504.374C30.9726 500.27 32.3269 496.1 33.7546 491.873L31.8598 491.233C30.4271 495.475 29.0682 499.659 27.7812 503.777L29.6902 504.374ZM38.07 479.552C39.5326 475.52 41.0603 471.445 42.6547 467.336L40.7901 466.612C39.1903 470.736 37.6574 474.824 36.1899 478.87L38.07 479.552ZM47.5529 455.115C49.1902 451.158 50.8887 447.176 52.6494 443.174L50.8188 442.368C49.052 446.384 47.3478 450.38 45.7049 454.35L47.5529 455.115ZM58.0771 431.206C59.8992 427.307 61.7807 423.395 63.7225 419.475L61.9304 418.587C59.9817 422.521 58.0936 426.447 56.2652 430.359L58.0771 431.206ZM69.6768 407.802C71.6862 403.975 73.7539 400.145 75.881 396.319L74.1329 395.347C71.998 399.188 69.9227 403.031 67.906 406.872L69.6768 407.802ZM82.3766 384.964C84.5749 381.229 86.8309 377.502 89.1457 373.787L87.4483 372.729C85.1244 376.459 82.8596 380.2 80.653 383.95L82.3766 384.964ZM96.2003 362.786C98.5906 359.163 101.039 355.557 103.545 351.972L101.906 350.826C99.389 354.426 96.931 358.047 94.531 361.684L96.2003 362.786ZM111.176 341.371C113.763 337.882 116.407 334.417 119.109 330.982L117.537 329.745C114.823 333.196 112.167 336.676 109.57 340.18L111.176 341.371ZM127.333 320.838C130.118 317.505 132.962 314.203 135.865 310.939L134.37 309.61C131.454 312.89 128.596 316.207 125.798 319.556L127.333 320.838ZM144.691 301.319C147.678 298.166 150.724 295.051 153.829 291.981L152.422 290.559C149.302 293.645 146.241 296.775 143.239 299.944L144.691 301.319ZM163.262 282.959C166.451 280.011 169.697 277.11 173.003 274.259L171.697 272.745C168.373 275.611 165.109 278.527 161.905 281.49L163.262 282.959ZM183.038 265.912C186.423 263.198 189.866 260.537 193.368 257.932L192.175 256.327C188.653 258.947 185.19 261.623 181.787 264.352L183.038 265.912ZM203.988 250.337C207.559 247.884 211.188 245.489 214.876 243.156L213.807 241.466C210.097 243.812 206.447 246.221 202.856 248.689L203.988 250.337ZM226.052 236.387C229.792 234.219 233.59 232.116 237.447 230.079L236.513 228.31C232.633 230.36 228.812 232.476 225.05 234.656L226.052 236.387ZM249.143 224.196C253.03 222.337 256.973 220.545 260.973 218.823L260.183 216.986C256.158 218.718 252.19 220.521 248.28 222.391L249.143 224.196ZM273.147 213.872C277.15 212.337 281.208 210.872 285.322 209.478L284.68 207.584C280.542 208.986 276.459 210.46 272.431 212.005L273.147 213.872ZM297.83 205.518C301.949 204.303 306.122 203.16 310.348 202.091L309.858 200.152C305.606 201.227 301.408 202.378 297.264 203.6L297.83 205.518ZM323.079 199.132C327.304 198.236 331.581 197.412 335.911 196.664L335.57 194.693C331.216 195.446 326.914 196.274 322.664 197.176L323.079 199.132ZM348.745 194.691C353.073 194.107 357.452 193.597 361.882 193.164L361.687 191.173C357.233 191.609 352.83 192.122 348.478 192.709L348.745 194.691ZM374.705 192.135C379.025 191.863 383.392 191.664 387.805 191.538L387.748 189.538C383.312 189.665 378.923 189.866 374.58 190.139L374.705 192.135ZM400.874 191.382C405.148 191.401 409.465 191.488 413.825 191.646L413.898 189.647C409.517 189.489 405.179 189.401 400.883 189.382L400.874 191.382ZM427.035 192.33C431.289 192.616 435.582 192.967 439.915 193.386L440.107 191.395C435.755 190.975 431.442 190.622 427.17 190.334L427.035 192.33ZM452.855 194.823C457.208 195.368 461.6 195.98 466.032 196.66L466.335 194.683C461.885 194 457.475 193.386 453.104 192.838L452.855 194.823ZM478.683 198.769C482.917 199.53 487.185 200.352 491.489 201.237L491.892 199.278C487.572 198.39 483.287 197.564 479.037 196.8L478.683 198.769ZM504.508 204.081C508.63 205.034 512.784 206.044 516.97 207.111L517.464 205.173C513.264 204.102 509.095 203.089 504.958 202.133L504.508 204.081ZM529.541 210.464C533.763 211.64 538.016 212.873 542.302 214.165L542.879 212.25C538.58 210.954 534.313 209.717 530.077 208.538L529.541 210.464ZM554.672 218.03C558.73 219.342 562.817 220.707 566.931 222.124L567.583 220.234C563.456 218.812 559.358 217.443 555.287 216.127L554.672 218.03ZM579.359 226.537C583.47 228.039 587.609 229.594 591.775 231.201L592.495 229.335C588.318 227.724 584.168 226.165 580.046 224.658L579.359 226.537ZM603.669 235.905C607.659 237.521 611.673 239.185 615.713 240.898L616.493 239.057C612.444 237.34 608.42 235.672 604.42 234.052L603.669 235.905ZM627.906 246.183C629.951 247.089 632.002 248.007 634.059 248.937L634.883 247.114C632.821 246.182 630.765 245.262 628.716 244.355L627.906 246.183ZM634.059 248.937C636.064 249.843 638.063 250.741 640.058 251.63L640.872 249.803C638.881 248.915 636.884 248.019 634.883 247.114L634.059 248.937ZM651.967 256.86C655.918 258.569 659.849 260.244 663.76 261.885L664.534 260.041C660.629 258.403 656.705 256.731 652.761 255.024L651.967 256.86ZM675.437 266.707C679.461 268.342 683.465 269.941 687.447 271.504L688.178 269.642C684.203 268.082 680.207 266.486 676.19 264.854L675.437 266.707ZM699.541 276.164C703.551 277.681 707.539 279.161 711.507 280.605L712.191 278.726C708.231 277.285 704.251 275.807 700.248 274.294L699.541 276.164ZM723.393 284.845C727.541 286.294 731.665 287.703 735.766 289.073L736.399 287.176C732.307 285.809 728.192 284.403 724.053 282.957L723.393 284.845ZM747.998 293.065C752.052 294.356 756.084 295.609 760.092 296.823L760.671 294.909C756.672 293.697 752.65 292.448 748.605 291.159L747.998 293.065ZM772.479 300.474C776.66 301.672 780.815 302.827 784.945 303.941L785.466 302.01C781.346 300.899 777.201 299.746 773.029 298.551L772.479 300.474ZM797.26 307.158C801.432 308.213 805.577 309.224 809.696 310.193L810.154 308.246C806.046 307.28 801.911 306.271 797.75 305.219L797.26 307.158ZM822.355 313.055C826.547 313.965 830.711 314.83 834.849 315.652L835.238 313.69C831.113 312.871 826.96 312.008 822.779 311.101L822.355 313.055ZM847.399 318.026C851.695 318.798 855.961 319.522 860.197 320.199L860.513 318.224C856.289 317.549 852.036 316.827 847.753 316.057L847.399 318.026ZM872.816 322.092C877.082 322.689 881.317 323.238 885.522 323.739L885.759 321.753C881.568 321.253 877.346 320.706 873.093 320.111L872.816 322.092ZM898.395 325.139C902.654 325.556 906.881 325.924 911.076 326.244L911.228 324.25C907.048 323.931 902.835 323.564 898.59 323.148L898.395 325.139ZM923.948 327.082C928.275 327.315 932.567 327.496 936.824 327.627L936.885 325.628C932.643 325.498 928.367 325.317 924.056 325.085L923.948 327.082ZM949.494 327.867C953.869 327.899 958.207 327.876 962.509 327.801L962.474 325.801C958.189 325.876 953.867 325.899 949.508 325.867L949.494 327.867ZM975.305 327.418C979.614 327.234 983.885 326.998 988.118 326.708L987.982 324.713C983.766 325.001 979.512 325.237 975.22 325.419L975.305 327.418ZM1000.98 325.659C1005.23 325.255 1009.45 324.798 1013.62 324.289L1013.38 322.304C1009.22 322.811 1005.03 323.266 1000.79 323.668L1000.98 325.659ZM1026.48 322.539C1030.73 321.9 1034.94 321.208 1039.1 320.462L1038.75 318.493C1034.6 319.236 1030.41 319.925 1026.19 320.561L1026.48 322.539ZM1051.76 318.01C1055.98 317.129 1060.16 316.193 1064.29 315.204L1063.83 313.259C1059.71 314.244 1055.55 315.175 1051.35 316.052L1051.76 318.01ZM1076.72 312.04C1080.9 310.912 1085.03 309.729 1089.12 308.494L1088.54 306.579C1084.47 307.809 1080.36 308.986 1076.2 310.109L1076.72 312.04ZM1101.31 304.611C1105.41 303.236 1109.47 301.807 1113.49 300.326L1112.8 298.45C1108.8 299.923 1104.76 301.346 1100.67 302.715L1101.31 304.611ZM1125.41 295.727C1129.43 294.108 1133.4 292.438 1137.32 290.717L1136.52 288.885C1132.61 290.598 1128.66 292.261 1124.66 293.872L1125.41 295.727ZM1148.96 285.408C1152.87 283.555 1156.73 281.652 1160.55 279.703L1159.63 277.922C1155.84 279.863 1151.99 281.757 1148.11 283.601L1148.96 285.408ZM1171.86 273.707C1175.65 271.63 1179.39 269.507 1183.08 267.339L1182.06 265.614C1178.39 267.772 1174.67 269.886 1170.9 271.954L1171.86 273.707ZM1194.03 260.693C1197.69 258.404 1201.3 256.072 1204.86 253.699L1203.75 252.034C1200.21 254.397 1196.61 256.719 1192.97 258.998L1194.03 260.693ZM1215.43 246.446C1218.95 243.958 1222.42 241.431 1225.85 238.867L1224.65 237.265C1221.24 239.819 1217.78 242.335 1214.27 244.813L1215.43 246.446ZM1236.01 231.055C1239.39 228.383 1242.73 225.675 1246.02 222.936L1244.74 221.399C1241.46 224.128 1238.14 226.824 1234.77 229.486L1236.01 231.055ZM1255.76 214.616C1259 211.774 1262.2 208.902 1265.35 206.003L1264 204.531C1260.86 207.419 1257.67 210.28 1254.44 213.111L1255.76 214.616ZM1274.68 197.215C1277.78 194.223 1280.84 191.205 1283.85 188.165L1282.43 186.758C1279.43 189.787 1276.38 192.794 1273.29 195.776L1274.68 197.215ZM1292.77 178.954C1295.74 175.827 1298.65 172.68 1301.53 169.517L1300.05 168.173C1297.18 171.326 1294.27 174.462 1291.32 177.579L1292.77 178.954ZM1310.06 159.926C1312.88 156.68 1315.67 153.421 1318.4 150.151L1316.87 148.867C1314.14 152.127 1311.37 155.377 1308.55 158.612L1310.06 159.926ZM1326.56 140.218C1329.25 136.87 1331.9 133.514 1334.51 130.154L1332.93 128.928C1330.33 132.279 1327.69 135.625 1325 138.963L1326.56 140.218ZM1342.31 119.913C1344.88 116.479 1347.41 113.044 1349.89 109.613L1348.27 108.441C1345.79 111.864 1343.27 115.29 1340.71 118.715L1342.31 119.913ZM1357.36 99.0921C1359.83 95.564 1362.25 92.0432 1364.63 88.5339L1362.97 87.4128C1360.6 90.9141 1358.18 94.4267 1355.72 97.9464L1357.36 99.0921ZM1371.76 77.8372C1374.13 74.2192 1376.46 70.618 1378.74 67.0381L1377.06 65.9627C1374.78 69.5355 1372.45 73.1293 1370.08 76.7396L1371.76 77.8372ZM1385.54 56.2366C1387.84 52.5334 1390.09 48.8586 1392.29 45.2176L1390.58 44.1822C1388.38 47.8171 1386.13 51.4854 1383.84 55.1819L1385.54 56.2366ZM1398.88 34.205C1401.07 30.487 1403.22 26.8114 1405.32 23.1843L1403.59 22.1817C1401.5 25.8042 1399.35 29.4746 1397.15 33.187L1398.88 34.205ZM1411.76 11.9802C1412.81 10.1356 1413.85 8.30589 1414.87 6.49209L1413.13 5.50791C1412.11 7.32008 1411.07 9.14796 1410.02 10.9907L1411.76 11.9802Z"
          fill="#777676"
        />
        {/* </g> */}
        <defs>
          <filter
            id="filter0_d_144_186"
            x="0.512207"
            y="0.666672"
            width="1422.82"
            height="607.333"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_144_186"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_144_186"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div className="Roles">
        <p>{scrollD}</p>
      </div>
      <div className="Role1">
        <p>{role1}</p>
      </div>
      {/* <div className="Role2">
        <p>{role2}</p>
      </div>
      <div className="Role3">
        <p>{role3}</p>
      </div> */}
    </div>
  );
};

export default RL;
