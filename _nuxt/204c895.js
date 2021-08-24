(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4],{470:function(e,o,t){"use strict";t.r(o);var n={name:"ContentImage",props:{src:{type:String,required:!0},alt:{type:String,default:void 0},title:{type:String,default:void 0}},computed:{img:function(){return this.$img(this.src,{fit:"inside",quality:75,width:1200,height:400})}}},r=t(37),l=t(42),d=t.n(l),c=t(161),component=Object(r.a)(n,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("figure",{staticClass:"d-flex flex-column justify-space-between align-center ma-3"},[t("v-img",{attrs:{src:e.img,alt:e.alt,title:e.title,contain:"","max-height":"400"}}),e._v(" "),t("figcaption",{staticClass:"text-subtitle-2 mt-2"},[e._v(e._s(e.title))])],1)}),[],!1,null,null,null);o.default=component.exports;d()(component,{VImg:c.a})},498:function(e,o,t){"use strict";t.r(o);var n={components:{ContentImage:t(470).default}},r=t(37),component=Object(r.a)(n,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"article pa-4 pa-sm-6 pa-md-8"},[t("article",[t("h1",{staticClass:"text-h2 mb-5"},[e._v("Jak administrować stroną?")]),e._v("\n      Wersja dla osób uprawnionych do bezpośredniego edytowania (bez potrzeby zatwierdzenia zmian przez kogoś innego).\n\n      "),t("h2",[e._v("TLDR")]),e._v(" "),e._m(0),e._v(" "),t("h2",[e._v("Co muszę zrobić, żeby dostać uprawnienia do edycji")]),e._v(" "),t("h3",[e._v("Konto GitHub")]),e._v(" "),e._m(1),e._v(" "),t("h3",[e._v("Uprawnienia")]),e._v(" "),t("p",[e._v("Po założeniu konta należy napisać do osoby opiekującej się informatorem (aktualnie V-ce przewo SSUJ)\n        o dodanie do zespołu. Po dodaniu zyskuje się pełen dostęp i można wprowadzać dowolne zmiany.")]),e._v(" "),t("h2",[e._v("Jak edytować")]),e._v(" "),t("p",[e._v("Informator można edytować na kilka sposobów zależnie od preferencji.")]),e._v(" "),t("h3",[e._v("Opcja 1: Netlify CMS (zalecane)")]),e._v(" "),e._m(2),e._v(" "),t("ContentImage",{attrs:{src:"/images/docs/netlify_ui.png",alt:"Ekran menu netlify",title:"Menu Netlify CMS"}}),e._v(" "),t("p",[e._v('W menu "Collections" znajdziemy oddzielny zestaw folderów dla każdego języka.')]),e._v(" "),t("p",[e._v("Każdy z folderów zawiera podstrony. Lista ich wyświetla się w środkowej części ekranu\n        po wybraniu folderu. Aby edytować jedną z nich wystarczy kliknąć jej nazwę.\n        Na liście tej wyświetlają się również podfoldery zawarte w wybranym katalogu. Po ich kliknięciu\n        można edytować ich nazwę w menu oraz przypisaną ikonę.")]),e._v(" "),t("p",[e._v("Nowe strony i foldery tworzy się przyciskiem New Page (język).")]),e._v(" "),t("p",[e._v("Po wybraniu strony do edycji lub utworzeniu nowej przywita nas ekran podobny do poniższego.")]),e._v(" "),t("ContentImage",{attrs:{src:"/images/docs/netlify_edit.png",alt:"Ekran edycji netlify",title:"Ekran edycji"}}),e._v(" "),t("p",[e._v("Po lewej widzimy ekran edycji.")]),e._v(" "),e._m(3),e._v(" "),t("p",[e._v("Po prawej stronie widzimy podgląd edytowanej przez nas strony. Należy pamiętać, że nie jest on dokładnym\n        odwzorowaniem\n        aplikacji i strona może nieco się różnić pod względem stylu (np. obrazki są wypośrodkowane i z podpisem na\n        stronie).")]),e._v(" "),e._m(4),e._v(" "),t("p",[e._v("Za pomoca Netlify CMS można edytować praktycznie całą zawartość poza stronami specjalnymi (w tej chwili tylko\n        strona główna).")]),e._v(" "),t("h3",[e._v("Opcja 2: bezpośrednio przez Github")]),e._v(" "),t("p",[e._v("Github posiada wbudowany edytor tekstu. Nie jest on tak zintegrowany jak Netlify CMS, ale w niektórych\n        przypadkach może być pomocny.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),t("p",[e._v("Pod front matter wpisujemy treść samego artykułu. W razie wątpliwości warto podpatrzeć jak wygląda to w już istniejących podstronach i stworzyć coś podobnego :)")]),e._v(" "),t("p",[e._v("Z uwagi na to, że pisanie front matter ręcznie jest dość mało intuicyjne zaleca się używanie Metody 1.")]),e._v(" "),t("h3",[e._v("Opcja 3: Za pomocą klienta Git")]),e._v(" "),t("p",[e._v("Ponieważ Github używa standardowego systemu Git do zarządzania trescią informator można go w całości ściągnąć i edytować\n      dowolną aplikacją wspierającą Git, na przykład:")]),e._v(" "),e._m(7),e._v(" "),t("p",[e._v("Niezaleznie od używanej aplikacji efektem jest folder na dysku z kopią całego informatora, w którym możemy dokonywać zmian (dowolnym edytorem tekstu).\n      Po dokonaniu zmian należy je zatwierdzić (commit) oraz przesłać (push). Nowe wersje można pobrać za pomocą pull/update.")]),e._v(" "),t("p",[e._v("Używanie aplikacji jest najbardziej wygodną opcją do wprowadzania dużych zmian, ale tak, jak z edytowaniem przez Github wymaga ręcznego pisania front matter.\n      Pod tym względem również zalecam Metodę 1 - Netlify na początek. ")]),e._v(" "),t("h2",[e._v("Co robić gdy coś nie jest jasne lub coś nie działa?")]),e._v(" "),t("p",[e._v("W sytuacjach tych należy prześladować v-ce przewodniczącego ssuj (ale nie przed 10 rano bo śpi ;P).")])],1)])}),[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ol",[t("li",[e._v("Założyć konto na "),t("a",{attrs:{href:"https://github.com/"}},[e._v("https://github.com/")]),e._v(",")]),e._v(" "),t("li",[e._v("Napisać do v-ce ssuj o dodanie do zespołu informatora (podać nick na github),")]),e._v(" "),t("li",[e._v("Wejść na "),t("a",{attrs:{href:"https://infossuj.pardyl.com/admin/"}},[e._v("https://infossuj.pardyl.com/admin/")]),e._v(",")]),e._v(" "),t("li",[e._v("Wybrać stronę do edycji,")]),e._v(" "),t("li",[e._v("Wprowadzić zmiany,")]),e._v(" "),t("li",[e._v("Kliknąć publish, zmiany będą widoczne na stronie po kilku minutach.")])])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[e._v("Github ("),t("a",{attrs:{href:"https://github.com/"}},[e._v("https://github.com/")]),e._v(") to serwis pozwalający zarządzać wersjami\n        plików, budować aplikacje i klika innych rzeczy. Używamy go do obsługi i hostiwania informatora.\n        Ma dużo funkcji i jest dość skomplikowany, ale nie ma potrzeby zaznajamiać się z jego działaniem jeśli chcemy\n        tylko edytować treść informatora.\n        Potrzebne jest jednak konto w nim aby móc publikować nowe wersje aplikacji informatora (co dzieje się\n        automatycznie po zapisaniu zmian).")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[e._v("Wchodzimy na "),t("a",{attrs:{href:"https://infossuj.pardyl.com/admin/"}},[e._v("https://infossuj.pardyl.com/admin/")]),e._v("\n        i logujemy się przez GitHub. Powinien powitać nas ekran jak poniżej.")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ul",[t("li",[e._v('Pole "path" określa ścieżkę naszej strony/folderu (w jakim folderze ma się znaleźć).')]),e._v(" "),t("li",[e._v('Pole "title" definiuje tytuł strony/folderu (widzoczny w nagłówku oraz w menu, powinien być krótki).')]),e._v(" "),t("li",[e._v('Pole "material design icon" pozwala ustawić ikonę w menu aplikacji dla danej strony/folderu. Lista\n          dostępnych ikon znajduje się tu: '),t("a",{attrs:{href:"https://materialdesignicons.com/"}},[e._v("https://materialdesignicons.com/")]),e._v(" (należy podać samą nazwę\n          ikony).\n        ")]),e._v(" "),t("li",[e._v('Pole "order in menu" pozwala wymusić kolejność podstrony w menu aplikacji. Można wpisać w nie dowolną\n          liczbę. Strony z wyższą wartością będą niżej na liście niż te z mniejszą.\n        ')]),e._v(" "),t("li",[e._v('Przełącznik "is category only" pozwala określić czy tworzony element jest storną (z treścią) czy tylko\n          folderem. Należy go zaznaczyć jeśli tworzony element ma zawierać inne podstrony i być tylko kategorią w menu\n          aplikacji.\n        ')]),e._v(" "),t("li",[e._v('Pole "description" okresla abstrakt strony (to, co wyświetla się w wyszukiwarce lub social media jako krótki\n          opis linku), jest ignorowane dla folderów.\n        ')]),e._v(" "),t("li",[e._v('\n          Pole "body" to wreszcie sama zawartość strony. Tu wpisujemy treść naszego artykułu.\n          Powinno się zostawić je puste dla folderów. Treść można edytować jako Rich Text używając edytora lub\n          bezpośrednio jako Markdown.\n        ')])])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[e._v("Po zakończeniu edycji klikamy przycisk publish na górze ekranu. Nasze zmiany zostaną natychmiast zapisane.\n        Po kilku minutach nowa wersja aplikacji zostanie automatycznie opublikowana. Status procesu publikowania można\n        śledzić na Githubie "),t("a",{attrs:{href:"https://github.com/Samorzad-Studentow-UJ/informator/actions"}},[e._v("https://github.com/Samorzad-Studentow-UJ/informator/actions")])])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[e._v("Aby go użyć wystarczy wejść w repozytorium aplikacji ("),t("a",{attrs:{href:"https://github.com/Samorzad-Studentow-UJ/informator"}},[e._v("https://github.com/Samorzad-Studentow-UJ/informator")]),e._v('\n        i przejść do folderu "content". Znajdziemy w nim wszystkie standardowe podstrony podzielone na foldery. Każdy z\n        folderów zawiera plik "index.md" opisujący treść podstrony/tytuł folderu.\n        Można je edytować klikając ikonę ołówka. Niestety Github nie dostarcza edytora typu Rich-text, konieczna jest\n        więc podstawowa znajomość Markdown. Szybki kurs można znaleźć tu\n        '),t("a",{attrs:{href:"https://guides.github.com/features/mastering-markdown/"}},[e._v("https://guides.github.com/features/mastering-markdown/")]),e._v('.\n        Każdy plik MUSI zaczynać się od tak zwanego "front matter" określającego wszystko, co normalnie wpisywało się w\n        formularz w netlify, czyli:\n      ')])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("pre",[t("code",[e._v("---\ntitle: Tytuł strony\ndescription: Abstrakt\nicon: Ikona metrial design (jak wyżej)\norder: kolejność (jak wyżej)\nstub: true/false (odpowiednik Is category only jak wyżej)\n---\n")])])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ul",[t("li",[t("a",{attrs:{href:"https://desktop.github.com/"}},[e._v("Github Desktop")]),e._v(" - oficjalna aplikacja Github dla Windows i MacOS. Prawdopodobnie najbardziej\n        wygodna dla nie-informatykóœ aplikacja do obsługi Git.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.jetbrains.com/webstorm/"}},[e._v("Webstorm")]),e._v(" - program do tworzenia aplikacji internetowych, używany do pisania\n        kodu aplikacji informatora. Darmowy dla studentów.")])])}],!1,null,null,null);o.default=component.exports;installComponents(component,{ContentImage:t(470).default})}}]);