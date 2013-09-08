/*
 * main.js
 */
 
/*
 * contant
 */
var SCREEN_WIDTH    = 680;              // �X�N���[����
var SCREEN_HEIGHT   = 960;              // �X�N���[������
var SCREEN_CENTER_X = SCREEN_WIDTH/2;   // �X�N���[�����̔���
var SCREEN_CENTER_Y = SCREEN_HEIGHT/2;  // �X�N���[�������̔���
 
/*
 * main
 */
tm.main(function() {
    // �A�v���P�[�V�����Z�b�g�A�b�v
    var app = tm.app.CanvasApp("#world");       // ����
    app.resize(SCREEN_WIDTH, SCREEN_HEIGHT);    // �T�C�Y(�𑜓x)�ݒ�
    app.fitWindow();                            // �����t�B�b�e�B���O�L��
    app.background = "rgba(250, 250, 250, 1.0)";// �w�i�F
 
    app.replaceScene( GameScene() );    // �V�[���؂�ւ�
 
    // ���s
    app.run();
});
 
/*
 * �Q�[���V�[��
 */
tm.define("GameScene", {
    superClass: "tm.app.Scene",
 
    init: function() {
        this.superInit();
    },
});
