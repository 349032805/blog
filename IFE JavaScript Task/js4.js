/**
 * Created by tangkai on 2016/9/27.
 */
/**
 * aqiData���洢�û�����Ŀ���ָ������
 * ʾ����ʽ��
 * aqiData = {
 *    "����": 90,
 *    "�Ϻ�": 40
 * };
 */
var aqiData = {};

/**
 * ���û������л�ȡ���ݣ���aqiData������һ������
 * Ȼ����Ⱦaqi-list�б���������������
 */
function addAqiData() {
    var city=document.getElementById('aqi-city-input').value;
    var aqi=document.getElementById('aqi-value-input').value;
    aqiData[city]=aqi;
}

/**
 * ��Ⱦaqi-table���
 */
function renderAqiList() {
    var str="<tr><td>����</td><td>��������</td><td>����</td>";

    return str;
}
renderAqiList();

/**
 * ���add-btnʱ�Ĵ����߼�
 * ��ȡ�û����룬�������ݣ�������ҳ����ֵĸ���
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * �������ɾ����ť��ʱ��Ĵ����߼�
 * ��ȡ�ĸ��������ݱ�ɾ��ɾ�����ݣ����±����ʾ
 */
function delBtnHandle() {
    // do sth.

    renderAqiList();
}

function init() {

    // ���������add-btn��һ������¼������ʱ����addBtnHandle����

    // ��취��aqi-table�е�����ɾ����ť���¼�������delBtnHandle����

}

init();